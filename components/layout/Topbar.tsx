export default function Topbar() {
  return (
    <div className="w-full h-16 bg-white border-b flex items-center justify-between px-6">
      
      <div className="text-sm text-gray-500">
        Dashboard / Overview
      </div>

      <div className="flex items-center gap-3">
        
        <div className="text-sm text-gray-600">
          Admin
        </div>

        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">
          A
        </div>

      </div>

    </div>
  );
}