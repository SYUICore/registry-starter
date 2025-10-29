import { CatlifeSelect } from "@/components/ui/catlife-select";

export const catlifeSelect = {
  name: "catlife-select",
  components: {
    Default: (
      <CatlifeSelect>
        <option>Belo Horizonte - MG</option>
        <option>São Paulo - SP</option>
        <option>Rio de Janeiro - RJ</option>
      </CatlifeSelect>
    ),
    Error: (
      <CatlifeSelect error>
        <option>Select an option...</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </CatlifeSelect>
    ),
    Disabled: (
      <CatlifeSelect disabled>
        <option>Disabled Select</option>
      </CatlifeSelect>
    ),
  },
};
