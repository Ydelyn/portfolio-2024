import { primary } from "../components/theme/Themes";

export const logCredits = () => {
    const pieceEmoji = String.fromCodePoint(0x270c);
    const loveEmoji = String.fromCodePoint(0x1f49c);

    const logStyle = [
        `color: ${primary}`,
        "font-size: 3em",
        "font-weight: 300"
    ].join(";");

    return console.log(
        `%c Made by Ydelyn, with ${loveEmoji}\n © ${new Date().getFullYear()} github.com/ydelyn ${pieceEmoji}`,
        logStyle
    );
};
