import { CatlifeIconButton } from "@/components/ui/catlife-icon-button";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";

export const catlifeIconButton = {
  name: "catlife-icon-button",
  components: {
    Primary: (
      <CatlifeIconButton variant="primary" size="md">
        <Menu className="h-5 w-5" />
      </CatlifeIconButton>
    ),
    Secondary: (
      <CatlifeIconButton variant="secondary" size="md">
        <ChevronRight className="h-5 w-5" />
      </CatlifeIconButton>
    ),
    Outline: (
      <CatlifeIconButton variant="outline" size="md">
        <ChevronLeft className="h-5 w-5" />
      </CatlifeIconButton>
    ),
    Ghost: (
      <CatlifeIconButton variant="ghost" size="md">
        <Menu className="h-5 w-5" />
      </CatlifeIconButton>
    ),
    "Size Small": (
      <CatlifeIconButton variant="primary" size="sm">
        <Menu className="h-4 w-4" />
      </CatlifeIconButton>
    ),
    "Size Large": (
      <CatlifeIconButton variant="primary" size="lg">
        <Menu className="h-6 w-6" />
      </CatlifeIconButton>
    ),
    "Size XL": (
      <CatlifeIconButton variant="secondary" size="xl">
        <Menu className="h-7 w-7" />
      </CatlifeIconButton>
    ),
  },
};
