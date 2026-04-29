import React, { useState, useEffect } from 'react';
import { Workbook } from '@fortune-sheet/react';
import * as XLSX from 'xlsx';
import '@fortune-sheet/react/dist/index.css';

const HEADERS = [
  "STT", "HỌ TÊN", "STK", "NGÂN HÀNG", "SỐ NGÀY CÔNG", "NGHỈ KL", "CẤP ĐỘ NV", "CB", 
  "P1", "P2", "P3", "BONUS", "QUỸ SINH HOẠT", "QUỸ CÔNG ĐOÀN", "BH", 
  "THỰC LĨNH", "CHUYỂN KHOẢN", "TIỀN MẶT", "CÒN LẠI"
];

// Dữ liệu thô, để trống các cột cần tính toán
const RAW_DATA = [
  [1, "Chu Văn Tú", "VPB", "19034567890", 23, 0, "IT-Senior", 12000000, 8400000, 1200000, 2400000, 0, 50000, 200000, 345610, "", 10000000, "", 0],
  [2, "Nguyễn Thị Vân Loan", "Vietinbank", "001100456123", 22.5, 0, "IT-Senior", 12000000, 8400000, 900000, 2400000, 0, 50000, 200000, 345610, "", 10000000, "", 0],
  [3, "Phạm Văn Hải", "Vietcombank", "150012345678", 21.34, 0, "IT-Senior", 12000000, 8400000, 1200000, 2400000, 0, 50000, 200000, 345610, "", 10000000, "", 0],
  [4, "Ngô Thị Bích Nhi", "Vietinbank", "123456789", 26, 0, "IT-Senior", 12000000, 8400000, 2400000, 2400000, 0, 50000, 200000, 345610, "", 10000000, "", 0],
  [5, "Trần Thị Phương", "Vietinbank", "987654321", 20.87, 0, "IT-Senior", 12000000, 8400000, 2400000, 2400000, 0, 50000, 200000, 345610, "", 10000000, "", 0],
];

const Salary = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const celldata: any[] = [];
    
    // Đổ Headers
    HEADERS.forEach((header, colIndex) => {
      celldata.push({
        r: 0, c: colIndex, 
        v: { v: header, m: header, bl: 1, bg: "#f1f5f9", ht: 1, vt: 1 }
      });
    });

    // Đổ Dữ liệu
    RAW_DATA.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (value === "") return; 

        const cellInfo: any = { r: rowIndex + 1, c: colIndex, v: {} };
        
        if (typeof value === 'number') {
          cellInfo.v = { 
            v: value, 
            m: value.toString(), 
            ct: { fa: "General", t: "n" } 
          };
        } else {
          cellInfo.v = { v: value, m: value.toString() };
        }

        if (colIndex === 4) { cellInfo.v.fc = "#16a34a"; cellInfo.v.bl = 1; cellInfo.v.ht = 1; }
        if (colIndex === 6) { cellInfo.v.fc = "#3b82f6"; cellInfo.v.ht = 1; }
        
        celldata.push(cellInfo);
      });
    });

    setData([
      {
        name: "Bảng lương chi tiết",
        status: 1,
        celldata,
        config: {
          columnlen: {
            "0": 50, "1": 200, "2": 100, "3": 140, "4": 110, "5": 80, "6": 120,
            "7": 120, "8": 100, "9": 100, "10": 100, "11": 100, "12": 120,
            "13": 120, "14": 100, "15": 140, "16": 140, "17": 120, "18": 100
          }
        }
      }
    ]);
  }, []);

  const handleExportExcel = () => {
    if (data.length === 0) {
      alert("Chưa có dữ liệu để xuất!");
      return;
    }

    // Lấy dữ liệu lưới 2 chiều thực tế từ sheet đầu tiên
    const sheet = data[0];
    if (!sheet.data) {
      alert("Đang tải dữ liệu, vui lòng thử lại sau!");
      return;
    }

    const exportData = sheet.data.map((row: any[]) => {
      return row.map((cell: any) => {
        if (!cell) return "";
        // Ưu tiên lấy giá trị tính toán (v) nếu có, nếu không lấy giá trị chuỗi (m)
        if (cell.v !== undefined && cell.v !== null) return cell.v;
        if (cell.m !== undefined && cell.m !== null) return cell.m;
        return "";
      });
    });

    // Tạo file Excel
    const ws = XLSX.utils.aoa_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "BangLuong");
    XLSX.writeFile(wb, "BangLuong_HRM.xlsx");
  };

  return (
    <div className="h-[calc(100vh-100px)] -m-6 flex flex-col bg-gray-50 overflow-hidden relative">
      
      {/* 3 Thẻ Thống Kê Nổi Bật */}
      <div className="grid grid-cols-3 gap-6 px-6 pt-6 pb-4 shrink-0">
        
        {/* Card 1: Nhân Sự */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/30 relative overflow-hidden group cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
              <span className="material-symbols-outlined text-white">groups</span>
            </div>
            <span className="text-blue-100 font-medium">0</span>
          </div>
          <div className="mt-5 relative z-10">
            <h3 className="text-blue-100 text-xs font-bold tracking-wider mb-1">NHÂN SỰ</h3>
            <p className="text-4xl font-extrabold">15</p>
          </div>
        </div>

        {/* Card 2: Lương Trung Bình */}
        <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-5 text-white shadow-lg shadow-emerald-500/30 relative overflow-hidden group cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
              <span className="material-symbols-outlined text-white">trending_up</span>
            </div>
            <div className="bg-white/20 px-2 py-1 rounded-lg text-xs font-bold backdrop-blur-sm flex items-center gap-1">
              +2.1% <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </div>
          </div>
          <div className="mt-5 relative z-10">
            <h3 className="text-emerald-50 text-xs font-bold tracking-wider mb-1">LƯƠNG TRUNG BÌNH</h3>
            <p className="text-4xl font-extrabold">23.1M</p>
          </div>
        </div>

        {/* Card 3: Lương Cao Nhất */}
        <div className="bg-gradient-to-br from-rose-400 to-red-500 rounded-2xl p-5 text-white shadow-lg shadow-rose-500/30 relative overflow-hidden group cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
              <span className="material-symbols-outlined text-white">workspace_premium</span>
            </div>
          </div>
          <div className="mt-5 relative z-10">
            <h3 className="text-rose-100 text-xs font-bold tracking-wider mb-1">LƯƠNG CAO NHẤT</h3>
            <p className="text-4xl font-extrabold">32.9M</p>
          </div>
        </div>
      </div>

      {/* Thanh công cụ tùy chỉnh */}
      <div className="bg-white border-y border-gray-200 px-6 py-2 flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-blue-600 text-[20px]">info</span>
          <p className="text-gray-600">
            <strong className="text-gray-800">Mẹo định dạng số:</strong> Bôi đen cột &gt; Click nút <strong>"123" (Automatic)</strong> trên Toolbar &gt; Chọn kiểu (Tiền tệ/Số).
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleExportExcel}
            className="px-4 py-1.5 bg-green-600 text-white font-bold text-xs rounded shadow-sm hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Xuất file Excel (.xlsx)
          </button>
        </div>
      </div>

      <div className="flex-1 relative min-h-0">
        <div className="absolute inset-0">
          {data.length > 0 && (
            <Workbook 
              data={data} 
              onChange={setData} 
              showToolbar={true} 
              showFormulaBar={true} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Salary;

