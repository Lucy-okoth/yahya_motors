import { useNavigate } from "react-router-dom";
// import Logout from "../Logout";
function Sidebar() {
  let redirect = useNavigate();
  let link ="border-teal-50 inline-flex flex-row transition bg-slate-200 ease-in-out m-3 m-auto delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 rounded-xl h-20 sm:ml-4 font-bold text-3xl text-black hover:text-white p-2 p-auto";
  return (
    <div className="cols-span-1 shadow-lg grid sm:grid-cols-2 h-screen bg-stone-50 rounded-md  mr-1">
      <div onClick={() => redirect("/admin/view_car")} className={link} >
        <span className="ml-3">View Cars</span>
      </div>
      <div onClick={() => redirect("/admin/add_car")} className={link}>
        <span className="">Add Car</span>
      </div>
      <div onClick={() => redirect("/admin/sell_car")} className={link}>
        <span className="ml-3">Sell Car</span>
      </div>
      <div onClick={() => redirect("/login")} className={link}>
        <span className="ml-3">Transactions</span>
      </div>
      <div onClick={() => redirect("/admin/sell_car")} className={link}>
        <span className="ml-3">Admin Profile</span>
      </div>
      <div onClick={() => redirect("/login")} className={link}>
        <span className="ml-3">Logout</span>
      </div>
    </div>
  );
}
export default Sidebar;