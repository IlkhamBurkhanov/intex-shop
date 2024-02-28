import Link from "next/link";
import { useState } from "react";

const LeftSidebar = ({ expandedCategory, setExpandedCategory }) => {
  const [mainCategoryTitle, setMaincategoryTitle] = useState("");
  const categoryGroups = {
    "Mobil telefonlar va aksessuarlar": [
      "Smartfonlar",
      "Quloqchinlar",
      "Mikrofonlar",
      "Smartsoatlar",
      "Planshetlar",
    ],
    "Kompyuterlar va aksessuarlar": [
      "Noutbuklar",
      "Monitorlar",
      "Klaviaturalar",
      "Sichqonchalar",
      "Printerlar va skanerlar",
      "USB xotira-fleshkalari",
      "Tarmoq qurilmalari (Wi-Fi routerlar)",
    ],
    "Uy jihozlari": [
      "Televizorlar",
      "Havoni tozaluvchi va namlovchi jihozlar",
      "Suv isitgichlar",
      "Isitgichlar",
    ],
    "Oshxona jihozlari": [
      "Muzlatgichlar",
      "Gaz plitalari",
      "Mikroto'lqinli pechlar",
      "Tutun tortgichlar",
      "Qahva mashinalari",
      "Sharbat chiqargichlar",
      "Multivarkalar",
      "Blenderlar",
      "Elektr choynaklar",
      "Pishirish panellari",
      "Idish yuvish mashinalari",
      "Duxovkalar va pechlar",
      "Mini pechlar",
      "Plitalar",
    ],
    "Maishiy texnika": [
      "Kir yuvish mashinalari",
      "Changyutgich",
      "Konditsionerlar",
      "Ventilatorlar",
      "Dazmollar",
      "Tikuv mashinalari",
    ],
    "Shaxsiy gigiena uskunalari": [
      "Soch quritgichlar",
      "Soch olish mashinalari",
      "DEPILYATORLAR",
      "Soch to'g'rilash uskunalari va ploykalar",
      "Elektr Tish cho’tkalari",
    ],
    // ... (add more categories as needed)
  };

  const toggleCategory = (mainCategory) => {
    setMaincategoryTitle(mainCategory);
    setExpandedCategory((prevCategory) =>
      prevCategory === mainCategory ? null : mainCategory
    );
  };

  const handleSubCategoryClick = () => {
    setExpandedCategory(null); // Close the category details pane
  };

  return (
    <div className="flex gap-10 ">
      {/* Sidebar structure */}
      <div className="flex flex-col gap-2">
        {Object.entries(categoryGroups).map(([mainCategory, subCategories]) => (
          <div
            key={mainCategory}
            onClick={() => toggleCategory(mainCategory)}
            className="hover:bg-orange-50 hover:text-orange-400 font-normal py-1 px-2 rounded"
          >
            {mainCategory}
          </div>
        ))}
      </div>

      {/* Details pane structure */}
      <div className="ml-10 overflow-y-auto">
        {expandedCategory && (
          <ul className="flex flex-col text-sm gap-1 ">
            <h2 className=" text-lg font-medium py-2 px-3">
              {mainCategoryTitle}
            </h2>
            {categoryGroups[expandedCategory].map((subCategory) => (
              <li
                className="text-sm text-gray-500 px-4 hover:text-orange-400"
                key={subCategory}
                onClick={handleSubCategoryClick}
              >
                {subCategory}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
