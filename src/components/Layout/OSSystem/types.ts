export type AppIconsName = "ABOUT_ME" | "PROJECTS" | "SKILLS" | "EDUCATION" | "CONTACT";

export type AppIcon = { 
    name: AppIconsName;
    focus: boolean;
}

export type IconsBarProps = {
    appIcons: AppIcon[];
}
