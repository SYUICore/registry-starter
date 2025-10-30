import {
  CatlifeCard,
  CatlifeCardHeader,
  CatlifeCardTitle,
  CatlifeCardDescription,
  CatlifeCardContent,
} from "@/components/ui/catlife-card";

export const catlifeCard = {
  name: "catlife-card",
  components: {
    Primary: (
      <CatlifeCard variant="primary" size="md">
        <CatlifeCardHeader>
          <CatlifeCardTitle>RonRon</CatlifeCardTitle>
          <CatlifeCardDescription>Cuidados de rotina</CatlifeCardDescription>
        </CatlifeCardHeader>
        <CatlifeCardContent>
          <div className="flex items-center gap-1">
            <span className="text-4xl font-bold text-[#161616]">R$39</span>
            <span className="text-base text-[#161616]">/ mês</span>
          </div>
        </CatlifeCardContent>
      </CatlifeCard>
    ),
    Secondary: (
      <CatlifeCard variant="secondary" size="md">
        <CatlifeCardHeader>
          <CatlifeCardTitle>Purrfeito</CatlifeCardTitle>
          <CatlifeCardDescription>Plano ideal</CatlifeCardDescription>
        </CatlifeCardHeader>
        <CatlifeCardContent>
          <div className="flex items-center gap-1">
            <span className="text-4xl font-bold text-[#161616]">R$79</span>
            <span className="text-base text-[#161616]">/ mês</span>
          </div>
        </CatlifeCardContent>
      </CatlifeCard>
    ),
    Tertiary: (
      <CatlifeCard variant="tertiary" size="md">
        <CatlifeCardHeader>
          <CatlifeCardTitle>Miaugnífico</CatlifeCardTitle>
          <CatlifeCardDescription>Cobertura completa</CatlifeCardDescription>
        </CatlifeCardHeader>
        <CatlifeCardContent>
          <div className="flex items-center gap-1">
            <span className="text-4xl font-bold text-[#161616]">R$139</span>
            <span className="text-base text-[#161616]">/ mês</span>
          </div>
        </CatlifeCardContent>
      </CatlifeCard>
    ),
    Light: (
      <CatlifeCard variant="light" size="md">
        <CatlifeCardHeader>
          <CatlifeCardTitle>Light Card</CatlifeCardTitle>
          <CatlifeCardDescription>With light background</CatlifeCardDescription>
        </CatlifeCardHeader>
      </CatlifeCard>
    ),
    WithHover: (
      <CatlifeCard variant="primary" size="md" hover>
        <CatlifeCardHeader>
          <CatlifeCardTitle>Hoverable Card</CatlifeCardTitle>
          <CatlifeCardDescription>Try hovering over this</CatlifeCardDescription>
        </CatlifeCardHeader>
      </CatlifeCard>
    ),
  },
};
