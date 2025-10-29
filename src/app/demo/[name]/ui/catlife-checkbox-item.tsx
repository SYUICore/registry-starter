"use client";

import { useState } from "react";
import { CatlifeCheckboxItem } from "@/components/ui/catlife-checkbox-item";

function CheckboxDemo() {
  const [checked, setChecked] = useState({
    consultas: true,
    exames: false,
    vacinas: true,
  });

  return (
    <div className="space-y-4">
      <CatlifeCheckboxItem
        label="Consultas"
        variant="success"
        checked={checked.consultas}
        onChange={(e) =>
          setChecked((prev) => ({ ...prev, consultas: e.target.checked }))
        }
      />
      <CatlifeCheckboxItem
        label="Exames"
        variant="primary"
        checked={checked.exames}
        onChange={(e) =>
          setChecked((prev) => ({ ...prev, exames: e.target.checked }))
        }
      />
      <CatlifeCheckboxItem
        label="Vacinas"
        variant="secondary"
        checked={checked.vacinas}
        onChange={(e) =>
          setChecked((prev) => ({ ...prev, vacinas: e.target.checked }))
        }
      />
    </div>
  );
}

export const catlifeCheckboxItem = {
  name: "catlife-checkbox-item",
  components: {
    Default: <CheckboxDemo />,
  },
};
