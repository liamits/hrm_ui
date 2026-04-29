import React, { useState } from 'react';

const LeaveTypes = () => {
  const [showModal, setShowModal] = useState(false);
  const [contractType, setContractType] = useState('');

  const contracts = [
    { id: 35, code: 'HDLD-2024-035', employee: 'Dương Thị Kiều Ngân', type: 'Hợp đồng lao động không xác định thời hạn', startDate: '03/04/2026', endDate: '02/04/2026', status: 'active' },
    { id: 34, code: 'HDLD-2024-034', employee: 'Nguyễn Thị Ngọc Anh', type: 'Hợp đồng lao động không xác định thời hạn', startDate: '16/04/2026', endDate: 'Vô thời hạn', status: 'active' },
    { id: 33, code: 'HDLD-2024-033', employee: 'Nguyễn Văn Nhật', type: 'Hợp đồng lao động xác định thời hạn', startDate: '16/04/2026', endDate: 'Vô thời hạn', status: 'active' },
    { id: 32, code: 'HDLD-2024-032', employee: 'Nguyễn Thị Anh Tuyết', type: 'Hợp đồng thử việc', startDate: '16/04/2026', endDate: 'Vô thời hạn', status: 'active' },
    { id: 31, code: 'HDLD-2024-031', employee: 'Vũ Kim Ngân', type: 'Hợp đồng đào tạo nghề', startDate: '16/04/2026', endDate: 'Vô thời hạn', status: 'active' },
    { id: 30, code: 'HDLD-2024-030', employee: 'Nguyễn Hải Anh', type: 'Hợp đồng cộng tác viên / Hợp đồng dịch vụ', startDate: '16/04/2026', endDate: 'Vô thời hạn', status: 'active' },
    { id: 29, code: 'HDLD-2024-029', employee: 'Phạm Minh Hiếu', type: 'Hợp đồng lao động bằng lời nói', startDate: '16/04/2026', endDate: 'Vô thời hạn', status: 'active' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <nav className="text-sm text-gray-500 mb-2">
            <span>Trang chủ</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-semibold">Quản lý Hợp đồng</span>
          </nav>
          <h1 className="text-2xl font-black text-gray-800">Danh sách Hợp đồng</h1>
        </div>
        <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Thêm hợp đồng
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Nhân viên</label>
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Chọn nhân viên</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Phòng ban</label>
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Tất cả phòng ban</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Loại HĐ</label>
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Tất cả</option>
              <option>Hợp đồng lao động không xác định thời hạn</option>
              <option>Hợp đồng lao động xác định thời hạn</option>
              <option>Hợp đồng thử việc</option>
              <option>Hợp đồng đào tạo nghề</option>
              <option>Hợp đồng cộng tác viên / Hợp đồng dịch vụ</option>
              <option>Hợp đồng lao động bằng lời nói</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Trạng thái</label>
            <input type="text" placeholder="Tất cả" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Thời gian</label>
            <div className="flex gap-2">
              <input type="date" className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="date" className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button className="px-3 py-2.5 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors">
                <span className="material-symbols-outlined text-[20px]">refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs font-bold uppercase">
              <th className="px-6 py-4 text-left">Mã HĐ</th>
              <th className="px-6 py-4 text-left">Nhân viên</th>
              <th className="px-6 py-4 text-left">Loại HĐ</th>
              <th className="px-6 py-4 text-left">Thời hạn</th>
              <th className="px-6 py-4 text-left">Trạng thái</th>
              <th className="px-6 py-4 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4"><span className="text-sm font-bold text-purple-600">{contract.code}</span></td>
                <td className="px-6 py-4"><span className="text-sm font-semibold text-gray-800">{contract.employee}</span></td>
                <td className="px-6 py-4"><span className="text-sm text-gray-600">{contract.type}</span></td>
                <td className="px-6 py-4">
                  <div className="text-xs text-gray-500">
                    <div>Bắt đầu: {contract.startDate}</div>
                    <div>Kết thúc: {contract.endDate}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold uppercase">Hiệu lực</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full h-[95vh] flex flex-col" style={{ maxWidth: '1400px' }}>
            <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between rounded-t-3xl flex-shrink-0">
              <h2 className="text-2xl font-black text-gray-800">Thêm hợp đồng mới</h2>
              <button onClick={() => setShowModal(false)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                <span className="material-symbols-outlined text-gray-400">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="h-full grid grid-cols-2 gap-6 p-8">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-base font-black text-gray-800 mb-3">Thông tin cơ bản</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Mã hợp đồng <span className="text-red-500">*</span></label>
                          <input type="text" placeholder="VD: HDLD-2024-001" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Loại hợp đồng <span className="text-red-500">*</span></label>
                          <select value={contractType} onChange={(e) => setContractType(e.target.value)} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Chọn loại</option>
                            <option value="indefinite">Không xác định thời hạn</option>
                            <option value="definite">Xác định thời hạn</option>
                            <option value="probation">Thử việc</option>
                            <option value="training">Đào tạo nghề</option>
                            <option value="collaborator">Cộng tác viên</option>
                            <option value="verbal">Bằng lời nói</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Tên hợp đồng <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="VD: Hợp đồng lao động xác định thời hạn" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Nhân viên <span className="text-red-500">*</span></label>
                          <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"><option>Chọn nhân viên</option></select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Phòng ban</label>
                          <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"><option>Chọn phòng ban</option></select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Chức danh</label>
                          <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"><option>Chọn chức danh</option></select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-gray-800 mb-3">Thời hạn hợp đồng</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Ngày bắt đầu <span className="text-red-500">*</span></label>
                        <input type="date" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                      {(contractType === 'definite' || contractType === 'training' || contractType === 'collaborator') && (
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Ngày kết thúc <span className="text-red-500">*</span></label>
                          <input type="date" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      )}
                      {contractType === 'probation' && (
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Ngày kết thúc thử việc <span className="text-red-500">*</span></label>
                          <input type="date" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      )}
                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Trạng thái</label>
                        <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option>Hiệu lực</option>
                          <option>Hết hạn</option>
                          <option>Chờ duyệt</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-gray-800 mb-3">Thông tin lương</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Lương cơ bản</label>
                        <input type="text" placeholder="0" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Phụ cấp</label>
                        <input type="text" placeholder="0" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                      {contractType === 'probation' && (
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">% Lương thử việc</label>
                          <input type="text" defaultValue="85" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      )}
                      {contractType === 'training' && (
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Học phí cam kết</label>
                          <input type="text" placeholder="0" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      )}
                      {contractType === 'collaborator' && (
                        <div>
                          <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Đơn giá dịch vụ</label>
                          <input type="text" placeholder="0" className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {contractType !== 'verbal' && (
                    <div>
                      <h3 className="text-base font-black text-gray-800 mb-3">Đính kèm hồ sơ</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-400 transition-colors">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-purple-600 text-2xl">upload_file</span>
                          </div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Tải lên hợp đồng</p>
                          <p className="text-xs text-gray-500 mb-3">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                          <label className="px-5 py-2.5 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-all cursor-pointer">
                            <input type="file" multiple className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                            Chọn tệp
                          </label>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-red-500 text-[20px]">picture_as_pdf</span>
                              <div>
                                <p className="text-xs font-semibold text-gray-700">Hop_dong.pdf</p>
                                <p className="text-[10px] text-gray-500">2.5 MB</p>
                              </div>
                            </div>
                            <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                              <span className="material-symbols-outlined text-red-500 text-[18px]">delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {contractType === 'verbal' && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-amber-600 text-[24px]">record_voice_over</span>
                        <div>
                          <h3 className="text-base font-black text-amber-900 mb-2">Hợp đồng bằng lời nói</h3>
                          <p className="text-xs text-amber-800 leading-relaxed">
                            Loại hợp đồng này không yêu cầu văn bản. Chỉ cần ghi nhận thỏa thuận miệng giữa hai bên về công việc, thời gian và mức lương.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {contractType && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-[18px] mt-0.5">info</span>
                        <div className="text-xs text-blue-800 leading-relaxed">
                          {contractType === 'indefinite' && <p><strong>Lưu ý:</strong> Hợp đồng không xác định thời hạn không có ngày kết thúc.</p>}
                          {contractType === 'definite' && <p><strong>Lưu ý:</strong> Hợp đồng xác định thời hạn có thời hạn từ 12-36 tháng. Có thể gia hạn 01 lần.</p>}
                          {contractType === 'probation' && <p><strong>Lưu ý:</strong> Thời gian thử việc tối đa: 60 ngày (quản lý), 30 ngày (chuyên môn), 6 ngày (công việc khác).</p>}
                          {contractType === 'training' && <p><strong>Lưu ý:</strong> Hợp đồng đào tạo nghề cam kết thời gian làm việc sau đào tạo.</p>}
                          {contractType === 'collaborator' && <p><strong>Lưu ý:</strong> Hợp đồng cộng tác viên không phải hợp đồng lao động. Không hưởng BHXH, BHYT.</p>}
                          {contractType === 'verbal' && <p><strong>Lưu ý:</strong> Hợp đồng bằng lời nói chỉ áp dụng cho công việc dưới 1 tháng.</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 flex items-center justify-end gap-3 rounded-b-3xl flex-shrink-0">
              <button onClick={() => setShowModal(false)} className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all">Hủy</button>
              <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveTypes;