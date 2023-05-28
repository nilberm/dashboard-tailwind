"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineSpaceDashboard } from "react-icons/md";

interface NavigationProps {}
export default function Navigation(props: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      <div>
        <ul className="flex flex-col">
          <li>
            <Link
              href={"/dashboard"}
              className={`flex gap-1 px-4 py-2 justify-start items-center  ${
                pathname.startsWith("/")
                  ? "bg-blue-950 text-slate-50"
                  : "text-slate-800 hover:bg-sky-50"
              } rounded-lg`}
            >
              <MdOutlineSpaceDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard"}
              className="flex gap-1 px-4 py-2 justify-start items-center hover:bg-sky-50 rounded-lg text-slate-800"
            >
              Administrador
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard"}
              className="flex gap-1 px-4 py-2 justify-start items-center hover:bg-sky-50 rounded-lg text-slate-800"
            >
              Drive
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard"}
              className="flex gap-1 px-4 py-2 justify-start items-center hover:bg-sky-50 rounded-lg text-slate-800"
            >
              Processos
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard"}
              className="flex gap-1 px-4 py-2 justify-start items-center hover:bg-sky-50 rounded-lg text-slate-800"
            >
              Configurações
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
