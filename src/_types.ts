export type TProps = React.CSSProperties & {
    rollingTime?: number;
    onRoll?: (value: TValue) => void;
    defaultValue?: TValue;
    size?: number;
    faces?: string[];
    disabled?: boolean;
    cheatValue?: TValue;
    faceBg?: string;
    placement?: string;
    sound?: string;
    triggers?: string[];
    cheatFace?: number;
    cheatRolling?: boolean;
    notSixCount?: number;
    setNotSixCount?: (value: number) => void;
};

export type TValue = 1 | 2 | 3 | 4 | 5 | 6;

export type TKeyValuePair = {
    [key: string]: string;
};

export type TSingleFace = {
    className: string;
    style: TKeyValuePair;
    children: JSX.Element | null;
};

export type TValueClassMap = {
    [key in TValue]: string;
};

export type TFaceTransformMap = {
    [key in TValue]: (translate: number) => TKeyValuePair;
};

export type TDefaultFaceGrid = {
    [key in TValue]: number[];
} ;