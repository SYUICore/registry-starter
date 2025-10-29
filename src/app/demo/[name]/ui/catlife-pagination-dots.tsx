"use client";

import { useState } from "react";
import { CatlifePaginationDots } from "@/components/ui/catlife-pagination-dots";

function PaginationDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <CatlifePaginationDots
        total={5}
        current={currentSlide}
        onDotClick={setCurrentSlide}
      />
      <p className="text-sm text-gray-600">Current slide: {currentSlide + 1}</p>
    </div>
  );
}

export const catlifePaginationDots = {
  name: "catlife-pagination-dots",
  components: {
    Default: <PaginationDemo />,
  },
};
