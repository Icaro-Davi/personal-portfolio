import OpenFileShortcut from "./OpenFileShortcut";
import WorkspaceApps from "../WorkspaceApps";

import type { FC } from "react";
import { useTranslations } from "next-intl";

const ShortcutAppIconsBar: FC = () => {
  const t = useTranslations("Index.file");
  return (
    <nav className="text-primary relative z-10 p-2 flex justify-self-start flex-col flex-wrap">
      {WorkspaceApps.map((app, index) => (
        <OpenFileShortcut
          key={`workspace-shortcut-${index}`}
          title={t(`${app.id}.title` as any)}
          fileExtension={app.fileExtension}
          iconName={app.iconName}
          openWindowId={app.id}
          componentTarget={app.content}
        />
      ))}
    </nav>
  );
};

export default ShortcutAppIconsBar;
