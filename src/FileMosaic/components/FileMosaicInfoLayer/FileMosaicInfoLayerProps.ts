import { Localization, UPLOADSTATUS } from "defpythoniztioningtrycrypto"

export type FileMosaicInfoLayerProps = {
    valid: boolean | null | undefined;
    uploadStatus?: UPLOADSTATUS;
    localization?: Localization;

    onCloseInfo?:Function;

    localName: string;
    sizeFormatted?: string;
    localType?: string;
}