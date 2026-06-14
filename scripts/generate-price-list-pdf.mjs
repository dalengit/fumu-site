import { readFile, writeFile } from "node:fs/promises";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const outputPath = "public/assets/fumu-price-list.pdf";
const regularFontPath = "assets/fonts/Kanit-Regular.ttf";
const boldFontPath = "assets/fonts/Kanit-Bold.ttf";
const logoImagePath = "public/assets/fumu_guy.jpg";

const singles = [
    {
        name: "SIGNATURE KIMCHI",
        description:
            "Crisp, vibrant, and traditional wild-fermented vegetables. Packed with punchy, tangy, and naturally complex probiotic flavor.",
        price: "£5.00",
    },
    {
        name: "ORIGINAL CHILLI OIL",
        description:
            "The signature batch. Rich, deeply savory signature blend with a perfectly balanced aromatic heat built to elevate everyday food.",
        price: "£6.00",
    },
    {
        name: "SUPERHOT CHILLI OIL",
        description:
            "An intense, fiery evolution of our original blend. Crafted for serious heat-seekers without compromising on complex, umami depth.",
        price: "£8.00",
    },
];

const bundles = [
    {
        saveLabel: "SAVE £1",
        name: "THE CHAOS DUO",
        description:
            "Signature Kimchi + Original Chilli Oil.\nThe definitive foundation pair for your kitchen counter.",
        oldPrice: "£11",
        newPrice: "£10.00",
    },
    {
        saveLabel: "SAVE £3",
        name: "THE FULL DROP COLLECTION",
        description:
            "Original Chilli Oil + Superhot Chilli Oil + Signature Kimchi.\nExperience the complete flavor roster.",
        oldPrice: "£19",
        newPrice: "£16.00",
    },
];

const left = 56;
const right = 539;
const textMaxWidth = right - left - 144;

const wrapText = ({ text, font, size, maxWidth }) => {
    const lines = [];

    const paragraphs = text.split("\n");
    for (const paragraph of paragraphs) {
        const words = paragraph.split(/\s+/).filter(Boolean);
        let current = "";

        for (const word of words) {
            const candidate = current ? `${current} ${word}` : word;
            if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
                current = candidate;
                continue;
            }

            if (current) {
                lines.push(current);
            }
            current = word;
        }

        if (current) {
            lines.push(current);
        }
    }

    return lines;
};

const drawLines = ({ page, lines, x, y, font, size, color, lineGap }) => {
    let cursorY = y;
    for (const line of lines) {
        page.drawText(line, { x, y: cursorY, font, size, color });
        cursorY -= lineGap;
    }
    return cursorY;
};

const main = async () => {
    const [regularFontBytes, boldFontBytes, logoImageBytes] = await Promise.all([
        readFile(regularFontPath),
        readFile(boldFontPath),
        readFile(logoImagePath),
    ]);

    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    const kanitRegular = await pdfDoc.embedFont(regularFontBytes);
    const kanitBold = await pdfDoc.embedFont(boldFontBytes);
    const logoImage = await pdfDoc.embedJpg(logoImageBytes);

    const page = pdfDoc.addPage([595, 842]);

    page.drawRectangle({
        x: 0,
        y: 0,
        width: 595,
        height: 842,
        color: rgb(1, 1, 1),
    });

    page.drawImage(logoImage, {
        x: left,
        y: 724,
        width: 78,
        height: 78,
    });

    page.drawText("FUMU", {
        x: left + 92,
        y: 762,
        font: kanitBold,
        size: 52,
        color: rgb(0, 0, 0),
    });

    page.drawText("MENU", {
        x: left + 92,
        y: 717,
        font: kanitBold,
        size: 52,
        color: rgb(0, 0, 0),
    });

    const siteLabel = "www.fumu.world";
    const siteLabelSize = 14;
    const siteLabelWidth = kanitBold.widthOfTextAtSize(siteLabel, siteLabelSize);
    page.drawText(siteLabel, {
        x: right - siteLabelWidth,
        y: 704,
        font: kanitBold,
        size: siteLabelSize,
        color: rgb(0.78, 0.03, 0.09),
    });

    const instagramLabel = "IG: fumu.chilli";
    const instagramSize = 15;
    const instagramWidth = kanitBold.widthOfTextAtSize(instagramLabel, instagramSize);
    page.drawText(instagramLabel, {
        x: right - instagramWidth,
        y: 684,
        font: kanitBold,
        size: instagramSize,
        color: rgb(0.23, 0.23, 0.23),
    });

    page.drawLine({
        start: { x: left, y: 672 },
        end: { x: right, y: 672 },
        thickness: 1,
        color: rgb(0, 0, 0),
    });

    let y = 644;
    for (const item of singles) {
        page.drawLine({
            start: { x: left, y: y - 8 },
            end: { x: right, y: y - 8 },
            thickness: 1,
            color: rgb(0.88, 0.88, 0.88),
        });

        page.drawText(item.name, {
            x: left,
            y: y - 30,
            font: kanitBold,
            size: 17,
            color: rgb(0.07, 0.07, 0.07),
        });

        const singleLines = wrapText({
            text: item.description,
            font: kanitRegular,
            size: 11,
            maxWidth: textMaxWidth,
        });

        drawLines({
            page,
            lines: singleLines,
            x: left,
            y: y - 50,
            font: kanitRegular,
            size: 11,
            color: rgb(0.2, 0.2, 0.2),
            lineGap: 14,
        });

        const priceWidth = kanitBold.widthOfTextAtSize(item.price, 40);
        page.drawText(item.price, {
            x: right - priceWidth,
            y: y - 88,
            font: kanitBold,
            size: 40,
            color: rgb(0.78, 0.03, 0.09),
        });

        y -= 108;
    }

    page.drawText("B U N D L E S", {
        x: left,
        y: y + 2,
        font: kanitBold,
        size: 20,
        color: rgb(0.23, 0.23, 0.23),
    });

    y -= 14;
    for (const item of bundles) {
        page.drawLine({
            start: { x: left, y: y - 8 },
            end: { x: right, y: y - 8 },
            thickness: 1,
            color: rgb(0.88, 0.88, 0.88),
        });

        page.drawText(item.saveLabel, {
            x: left,
            y: y - 30,
            font: kanitBold,
            size: 13,
            color: rgb(0.78, 0.03, 0.09),
        });

        page.drawText(item.name, {
            x: left,
            y: y - 50,
            font: kanitBold,
            size: 16,
            color: rgb(0.07, 0.07, 0.07),
        });

        const bundleLines = wrapText({
            text: item.description,
            font: kanitRegular,
            size: 11,
            maxWidth: textMaxWidth,
        });

        drawLines({
            page,
            lines: bundleLines,
            x: left,
            y: y - 68,
            font: kanitRegular,
            size: 11,
            color: rgb(0.2, 0.2, 0.2),
            lineGap: 14,
        });

        const oldPriceY = y - 88;
        const oldPriceWidth = kanitRegular.widthOfTextAtSize(item.oldPrice, 16);
        const newPriceWidth = kanitBold.widthOfTextAtSize(item.newPrice, 30);
        const newPriceX = right - newPriceWidth;
        const oldPriceX = newPriceX - oldPriceWidth - 14;
        const oldPriceStrikeY = oldPriceY + 8;

        page.drawText(item.oldPrice, {
            x: oldPriceX,
            y: oldPriceY,
            font: kanitRegular,
            size: 16,
            color: rgb(0.45, 0.45, 0.45),
        });

        page.drawLine({
            start: { x: oldPriceX - 1, y: oldPriceStrikeY },
            end: { x: oldPriceX + oldPriceWidth + 1, y: oldPriceStrikeY },
            thickness: 1.4,
            color: rgb(0.45, 0.45, 0.45),
        });

        page.drawText(item.newPrice, {
            x: newPriceX,
            y: y - 94,
            font: kanitBold,
            size: 30,
            color: rgb(0.78, 0.03, 0.09),
        });

        y -= 118;
    }

    const pdfBytes = await pdfDoc.save();
    await writeFile(outputPath, pdfBytes);

    console.log(`Generated ${outputPath}`);
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
