import { CatlifeInput } from "@/components/ui/catlife-input";

export const catlifeInput = {
  name: "catlife-input",
  components: {
    Default: <CatlifeInput placeholder="Nome do seu pet" />,
    WithValue: <CatlifeInput value="Gatinho" readOnly />,
    Error: <CatlifeInput placeholder="E-mail" error />,
    Disabled: <CatlifeInput placeholder="Disabled" disabled />,
  },
};
