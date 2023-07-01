import Foodform from "@/components/Foodform";
import Form from "@/components/Form";
import Navabar from "@/components/Navabar";
import Register from "@/components/Register";
import SearchData from "@/components/SearchData";
import UseForm from "@/components/UseForm";
import Validate from "@/components/Validate";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-stone-500">
     
      <div>
        <SearchData />
      </div>
    </div>
  );
}
