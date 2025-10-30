import { CatlifeButton } from "@/components/ui/catlife-button";
import { Menu } from "lucide-react";

export const catlifeButton = {
  name: "catlife-button",
  components: {
    Primary: <CatlifeButton variant="primary">Primary</CatlifeButton>,
    Secondary: <CatlifeButton variant="secondary">Secondary</CatlifeButton>,
    Outline: <CatlifeButton variant="outline">Outline</CatlifeButton>,
    Ghost: <CatlifeButton variant="ghost">Ghost</CatlifeButton>,
    Link: <CatlifeButton variant="link">Link</CatlifeButton>,
    "Size Small": <CatlifeButton size="sm">Small</CatlifeButton>,
    "Size Medium": <CatlifeButton size="md">Medium</CatlifeButton>,
    "Size Large": <CatlifeButton size="lg">Large</CatlifeButton>,
    Icon: (
      <CatlifeButton size="icon">
        <Menu className="h-5 w-5" />
      </CatlifeButton>
    ),
    Disabled: <CatlifeButton disabled>Disabled</CatlifeButton>,
  },
};
