import { createRoot } from "react-dom/client";
// import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter"
import ResponsiveDesign from "./ResponsiveDesign";
import ProductListSearchFilter from "./ProductListSearchFilter";


createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <TailwindCSS/> */}
            {/* <FrameworkListSearchFilter/>      */}
            {/* <ResponsiveDesign/> */}
            <ProductListSearchFilter/>
        </div>
    )
