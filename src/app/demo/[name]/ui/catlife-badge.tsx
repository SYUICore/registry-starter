import { CatlifeBadge } from "@/components/ui/catlife-badge";

export const catlifeBadge = {
  name: "catlife-badge",
  components: {
    Success: <CatlifeBadge variant="success">-10%</CatlifeBadge>,
    Primary: <CatlifeBadge variant="primary">-20%</CatlifeBadge>,
    Secondary: <CatlifeBadge variant="secondary">-30%</CatlifeBadge>,
    Outline: <CatlifeBadge variant="outline">-40%</CatlifeBadge>,
    "Size Small": <CatlifeBadge variant="success" size="sm">Small</CatlifeBadge>,
    "Size Large": <CatlifeBadge variant="primary" size="lg">Large</CatlifeBadge>,
  },
};
