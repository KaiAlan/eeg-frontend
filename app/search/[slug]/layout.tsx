import FilterSidebar from "@/components/filter";

export default function BrowseSearchedProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex mt-8 relative">
        <aside className=" w-72 h-full desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
        <FilterSidebar />
        </aside>
        <div className="max-w-[1176px] w-full flex flex-col justify-start px-4 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
        {children}
        </div>
    </section>
  );
}