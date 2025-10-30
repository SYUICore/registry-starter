import { CatlifeFormContainer } from "@/components/ui/catlife-form-container";
import { CatlifeInput } from "@/components/ui/catlife-input";
import { CatlifeButton } from "@/components/ui/catlife-button";

export const catlifeFormContainer = {
  name: "catlife-form-container",
  components: {
    Default: (
      <CatlifeFormContainer title="Encontre a opção ideal">
        <CatlifeInput placeholder="Nome do seu pet" />
        <CatlifeButton variant="primary" className="w-full">
          Vamos lá
        </CatlifeButton>
      </CatlifeFormContainer>
    ),
  },
};
