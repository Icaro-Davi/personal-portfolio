import { ReactNode } from "react";

export type AppIconsName = "ABOUT_ME" | "PROJECTS" | "SKILLS" | "EDUCATION" | "CONTACT" | "COFFEE";

export type AppIcon = {
    name: AppIconsName;
    window: {
        focus: boolean;
        id?: string;
        title: string;
    }
}

export type WorkspaceAppsType = {
    title: string;
    iconName: AppIconsName;
    id: string;
    content: ReactNode;
    fileExtension?: string;
}[];
