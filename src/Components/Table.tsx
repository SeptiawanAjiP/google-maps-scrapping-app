import React from "react";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
interface Place {
  index: number;
  storeName: string;
  placeId: string;
  address: string;
  category: string;
  phone?: string;
  googleUrl: string;
  bizWebsite?: string;
  ratingText: string;
}

interface TableProps {
  places: Place[];
}

const Table: React.FC<TableProps> = ({ places }) => {

  if (!places) {
    return <div>No data available</div>;
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(places);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  
    saveAs(blob, "data.xlsx");
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <button onClick={exportToExcel } className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded">Export to Excel</button>
          <table className="min-w-full divide-y divide-gray-200 mt-3">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating & Ulasan
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No. Telp
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Alamat
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {places.map((item, index) => (
                <tr key={item.storeName}>
                  <td className="px-6 py-4 whitespace-normal">
                    <div className="text-sm text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4">
                    <a href={item.googleUrl} target="_blank" rel="noreferrer">
                      <span className="inline-block text-sm leading-5 font-semibold bg-green-100 text-green-800 whitespace-normal px-2 py-1">
                        {item.storeName}
                      </span>
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      🌟 {item.ratingText}{" "}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    <div className="text-sm text-gray-900">{item.address}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;


