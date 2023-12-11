
const exTq = (ex,entity) => `- [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`

const objEx = [
    (ex,entity) => `[tổng quan]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tong quan]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tổng quan]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tóm tắt]{"entity":"thongtinphu","value":"tong_quan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[khái quát]{"entity":"thongtinphu","value":"tong_quan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Khái quát]{"entity":"thongtinphu","value":"tong_quan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Khai quat]{"entity":"thongtinphu","value":"tong_quan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tong quan]{"entity":"thongtinphu","value":"tong_quan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tom tat]{"entity":"thongtinphu","value":"tong_quan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tom tat]{"entity":"thongtinphu","value":"tong_quan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tóm tắt]{"entity":"thongtinphu","value":"tong_quan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[khai quat]{"entity":"thongtinphu","value":"tong_quan"} ve nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[giới thiệu]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Giới thiệu]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Gioi thieu]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[cho em hỏi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[cho em hỏi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Cho em hoi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Cho em hỏi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[cho em hỏi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[em muốn biết]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Em muon biet]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Em muốn biết]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[em muốn biết]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[em muốn hỏi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Em muon hoi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Em muốn hỏi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[em muon hoi]{"entity":"thongtinphu","value":"tong_quan"} về ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[gioi thieu]{"entity":"thongtinphu","value":"tong_quan"} ve nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[cho em hoi]{"entity":"thongtinphu","value":"tong_quan"} ve nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[em muon biet]{"entity":"thongtinphu","value":"tong_quan"} ve nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[em muon hoi]{"entity":"thongtinphu","value":"tong_quan"} ve nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
   
    (ex,entity) => `Em có dự định muốn học ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}, vậy cho em hỏi học ngành này xong thì ra ngoài có thể [làm gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} ạ`,
    (ex,entity) => `Hoc xong [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co the [lam cong viêc gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} a`,
    (ex,entity) => `Học xong [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co the [làm công việc gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} a`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [làm vị trí nào]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [làm gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Làm công việc gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [làm được gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Làm được gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [làm những công việc gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [làm những công việc nào]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi học xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [lam vi tri nao]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Lam duoc gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [lam duoc gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [lam nhung cong viec gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [lam nhung cong viec nao]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [lam gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Lam cong viec gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"} khi hoc xong`,
    (ex,entity) => `hoc xong [${ex}]{"entity":"thongtinchinh","value":"${entity}"} thi [lam duoc gi]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"}`,
    (ex,entity) => `học [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có thể [làm những công việc gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"}`,
    (ex,entity) => `học [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có thể [làm những công việc nào]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"}`,
    (ex,entity) => `học [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có thể [làm những công việc gì]{"entity":"thongtinphu","value":"tot_nghiep_lam_gi"}`,
    (ex,entity) => `cho em hoi [ma nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `cho em hỏi [Mã ngành]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muốn biết [mã ngành]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muon biet [Ma nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hoi [Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi [Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Em muon biết [Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Em muon biet [Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Ma Nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Mã Ngành]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    
    (ex,entity) => `[ma nganh]{"entity":"thongtinphu","value":"ma_nganh"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Chương trình đào tạo]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi về [chương trình đào tạo]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `cho em hoi [Chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muon biet [Chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muốn biết [Chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[ctdt]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Chương trình đào tạo]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi về [chương trình đào tạo]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `cho em hoi [Chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muon biet [Chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,

    (ex,entity) => `em muốn biết [Chuong trinh dao tao]{"entity":"thongtinphu","value":"chuong_trinh_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thoi gian dao tao]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thoi gian dao tao]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thời gian đào tạo]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thoi gian dao tao]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thời gian học]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thoi gian hoc]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thời gian học]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thoi gian hoc]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thời gian]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thoi gian]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thời gian]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thoi gian]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `hoc [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [bao lâu]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} thì ra trường`,
    (ex,entity) => `học [${ex}]{"entity":"thongtinchinh","value":"${entity}"} mất [bao lâu]`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [học mấy năm]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [hoc may nam]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [đào tạo mấy năm]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [dao tao may nam]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [đào tạo bao lâu]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [dao tao bao lau]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Đào tạo bao lâu]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Dao tao bao lau]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `hoc [${ex}]{"entity":"thongtinchinh","value":"${entity}"} trong [bao lau]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"}`,
    (ex,entity) => `[thời gian đào tạo]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} của ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thoi gian hoc tap]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} của ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[thời gian học tập]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} của ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thời gian học tập]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} của ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Thoi gian hoc tap]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} của ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[học mấy năm]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `học [${ex}]{"entity":"thongtinchinh","value":"${entity}"} [bao lâu]{"entity":"thongtinphu","value":"thoi_gian_dao_tao"} thì xong`,
    (ex,entity) => `[hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi về [học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `em muốn biết [chi phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `em muốn biết [Chi phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `Em muon biet [chi phi]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `cho em hoi ve [học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ạ`,
    (ex,entity) => `Cho em hoi [hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tổng tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tong tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tong tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tổng tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[số tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[so tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Số tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[So tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[sotc]{"entity":"thongtinphu","value":"sotc"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[số tín chỉ]{"entity":"thongtinphu","value":"sotc"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Số tín chỉ]{"entity":"thongtinphu","value":"sotc"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[so tin chi]{"entity":"thongtinphu","value":"sotc"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[So tin chi]{"entity":"thongtinphu","value":"sotc"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[so tin chi]{"entity":"thongtinphu","value":"sotc"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co bn [tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co bao nhieu [tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có bao nhiêu [Tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có tổng cộng bao nhiêu [tín chỉ]{"entity":"thongtinphu","value":"sotc"} tất cả`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có bn [tín chỉ]{"entity":"thongtinphu","value":"sotc"} tất cả`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} co [bao nhieu tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} hoc [bao nhieu tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} tổng cộng [bao nhiêu tín chỉ]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co tong cong bao nhieu [tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co tong cong bao nhieu [tin chi]{"entity":"thongtinphu","value":"sotc"} tat ca`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có tổng cộng bao nhiêu [tín chỉ]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} có [bao nhiêu tín chỉ]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} có tất cả [bao nhiêu tin chỉ]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} co tat ca [bao nhieu tin chi]{"entity":"thongtinphu","value":"sotc"}`,
    (ex,entity) => `nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co cac [chuyen nganh]{"entity":"thongtinphu","value":"chuyen_nganh"} nao`,
    (ex,entity) => `nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có các [chuyên ngành]{"entity":"thongtinphu","value":"chuyen_nganh"} nào`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} được chia mấy [chuyên ngành]{"entity":"thongtinphu","value":"chuyen_nganh"}`,
    (ex,entity) => `ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} có những [chuyên ngành]{"entity":"thongtinphu","value":"chuyen_nganh"} nào`,
    (ex,entity) => `[${ex}]{"entity":"thongtinchinh","value":"${entity}"} [Chuyen Nganh]{"entity":"thongtinphu","value":"chuyen_nganh"}`,
    (ex,entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `cho em hỏi [khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hỏi [khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Em muon biet [khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Cho em hoi [khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `cho em hoi [khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Em muốn biết [khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muon biết [khoi thi]{"entity":"thongtinphu","value":"khoi_thi"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[khoi thi]{"entity":"thongtinphu","value":"khoi_thi"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `em muon biet [Khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Khối thi]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Khoi thi]{"entity":"thongtinphu","value":"khoi_thi"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tổ hợp xét tuyển]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[to hop xet tuyen]{"entity":"thongtinphu","value":"khoi_thi"} thi nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[Tổ hợp xét tuyển]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[To hop xet tuyen]{"entity":"thongtinphu","value":"khoi_thi"} thi nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[to hop xet tuyen]{"entity":"thongtinphu","value":"khoi_thi"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tổ hợp xét tuyển]{"entity":"thongtinphu","value":"khoi_thi"} thi ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tổ hợp xét tuyển]{"entity":"thongtinphu","value":"khoi_thi"} thi ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `Tổ hợp môn]{"entity":"thongtinphu","value":"khoi_thi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[To hop mon]{"entity":"thongtinphu","value":"khoi_thi"} thi nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[to hop mon]{"entity":"thongtinphu","value":"khoi_thi"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tổ hợp môn]{"entity":"thongtinphu","value":"khoi_thi"} thi ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
    (ex,entity) => `[tổ hợp môn]{"entity":"thongtinphu","value":"khoi_thi"} thi ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"}`,
]

const objFlagCoso = [
    // (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở phía [bắc]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so phia [bac]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở phía [Bắc]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so phia [Bac]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở phía [nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở phía [nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so phia [Nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so phia [Nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở phía [bắc]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở phía [bắc]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so phia [Bac]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so phia [Bac]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}  ở cơ sở phía [nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở phía [Nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so phia [nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so phia [Nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `[điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so phia [Nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `[diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so phia [Bac]{"entity":"coso","value":"bac"}`,
    // (ex, entity) => `[Điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở phía [nam]{"entity":"coso","value":"nam"}`,
    // (ex, entity) => `[Diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở phía [bắc]{"entity":"coso","value":"bac"}`,

    (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở [hn]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so [Hn]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở [HN]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so [ha noi]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở [hcm]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} cơ sở [Hcm]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so [ho chi minh]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} co so [HCM]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở [ha noi]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở [hà nội]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so [Ha Noi]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so [Hà Nội]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"}  ở cơ sở [nam]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở [hồ chí minh]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so [Ho Chi Minh]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so [Hcm]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `[điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so [Hồ Chí Minh]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `[diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} o co so [Ha Noi]{"entity":"coso","value":"bac"}`,
    (ex, entity) => `[Điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở [hồ chí minh]{"entity":"coso","value":"nam"}`,
    (ex, entity) => `[Diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} ở cơ sở [HN]{"entity":"coso","value":"bac"}`,
]

const objFlagNamhoc = [
    (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2020]{"entity":"namhoc","value":"2020"}`,
    (ex, entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2020]{"entity":"namhoc","value":"2020"}`,
    (ex, entity) => `[điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `[diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[Điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `[Diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `Cho em hỏi [điểm chuẩn]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `Cho em hoi [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `Em muon biet [diem chuan]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `[Điểm trúng tuyển]{"entity":"thongtinphu","value":"diem_chuan"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `[Diem trung tuyen]{"entity":"thongtinphu","value":"diem_chuan"} nganh [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[Hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `[hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `Cho em hỏi về [học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `em muốn biết [chi phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2020]{"entity":"namhoc","value":"2020"}`,
    (ex, entity) => `em muốn biết [Chi phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `Em muon biet [chi phi]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `Em muon biet [Chi phi]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `Em muon biet [chi phi]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2020]{"entity":"namhoc","value":"2020"}`,
    (ex, entity) => `cho em hoi ve [học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `Cho em hoi [hoc phi]{"entity":"thongtinphu","value":"hoc_phi"} [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `[học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `[Học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `[tổng tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} năm [2020]{"entity":"namhoc","value":"2020"}`,
    (ex, entity) => `[tong tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2023]{"entity":"namhoc","value":"2023"}`,
    (ex, entity) => `[Tong tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `[Tổng tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2021]{"entity":"namhoc","value":"2021"}`,
    (ex, entity) => `[số tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2020]{"entity":"namhoc","value":"2020"}`,
    (ex, entity) => `[so tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `[Số tiền]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2019]{"entity":"namhoc","value":"2019"}`,
    (ex, entity) => `[So tien]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} am [2022]{"entity":"namhoc","value":"2022"}`,
    (ex, entity) => `[Học phí]{"entity":"thongtinphu","value":"hoc_phi"} ngành [${ex}]{"entity":"thongtinchinh","value":"${entity}"} nam [2020]{"entity":"namhoc","value":"2020"}`,
]

const objFlagPhu = [
    (ex, entity) => `em [cũng]{"entity":"flag","value":"more"} muốn biết thêm [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `em [cung]{"entity":"flag","value":"more"} muon biet them [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `em [cũng]{"entity":"flag","value":"more"} muốn biết [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `em [cung]{"entity":"flag","value":"more"} muon biet [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `cho em [hỏi thêm]{"entity":"flag","value":"more"} [${ex}]{"entity":"thongtinphu","value":"${entity}"} ạ`,
    (ex, entity) => `cho em [hoi them]{"entity":"flag","value":"more"} [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `[thế còn]{"entity":"flag","value":"more"} [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `[vậy còn]{"entity":"flag","value":"more"} [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `[the con]{"entity":"flag","value":"more"} [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `[vay con]{"entity":"flag","value":"more"} [${ex}]{"entity":"thongtinphu","value":"${entity}"}`,
    (ex, entity) => `con [${ex}]{"entity":"thongtinphu","value":"${entity}"} [thi sao]{"entity":"flag","value":"more"}`,
    (ex, entity) => `còn [${ex}]{"entity":"thongtinphu","value":"${entity}"} [thì sao]{"entity":"flag","value":"more"}`,
]



function generateTongquan(entity){
    arrKey.forEach(item => {
        console.log(`${exTq(item, entity)}`);
    });
}

function generateThongtinphu(entity){
    arrKey.forEach(item => {
        objEx.forEach(objItem => {
            console.log(`- ${objItem(item, entity)}`)
        })
    })
}

function generateByOrder(entity){
    let pos = -1;
    objEx.forEach(objItem => {
        if(pos == arrKey.length-1){
            pos = -1;
        }
        console.log(`- ${objItem(arrKey[++pos], entity)}`)
        // console.log(`- ${objItem(arrKey[++pos], "ktddt")} - ${pos}`)
    })
}

function generateBySelect(entity, objItems){
    let pos = -1;
    objItems.forEach(objItem => {
        if(pos == arrKey.length-1){
            pos = -1;
        }
        console.log(`- ${objItem(arrKey[++pos], entity)}`)
        // console.log(`- ${objItem(arrKey[++pos], "ktddt")} - ${pos}`)
    })
}

function generateBySelectObj(entity, objEntity, objItems){
    let pos = -1;
    objItems.forEach(objItem => {
        if(pos == objEntity.length-1){
            pos = -1;
        }
        console.log(`- ${objItem(objEntity[++pos], entity)}`)
        // console.log(`- ${objItem(arrKey[++pos], "ktddt")} - ${pos}`)
    })
}

function multipleGenerateBySelect(obj, objItems){
    Object.keys(obj).forEach(function(key){
        generateBySelectObj(key, obj[key], objItems);
        console.log("\n")
    })    
}


// const arrKey = ['ktddt', 'KTDDT', 'điện điện tử', 'điện tử', 'ki thuat dien dien tu', 'Ki thuat dien dien tu', 'ky thuat dien dien tu',
//  'Ky thuat dien dien tu', 'kt dien dien tu', 'Kt dien dien tu', 'kt điện điện tử', 'Kt điện điện tử', 'dien tu', 'dien dien tu',
//     'kĩ thuật điện điện tử', 'Kĩ thuật điện điện tử', 'kỹ thuật điện điện tử', 'Kỹ thuật điện điện tử', 
//  'kt điện điện tử', 'Kt điện điện tử']

 
// const arrKey = ['attt', 'ATTT', 'Attt', 'an toan thong tin', 'an toan tt', 'bao mat', 'An toan thong tin',
// 'An toan tt', 'an toàn thông tin', 'an toàn tt', 'An toàn thông tin', 'An toàn tt']


// const arrKey = ['iot', 'IOt', 'ioT', 'IOT', 'cong nghe iot','cn iot', 'Cong nghe IOT', 'Cong nghe iot', 'Cong nghe Iot', 'cong nghe iot'
// ,'cong nghe Iot', 'cong nghe internet van vat', 'Cong nghe internet van vat', 'cong nghe Internet van vat', 'cn internet van vat','Công nghệ IOT'
// , 'Công nghệ iot', 'Công nghệ Iot', 'công nghệ iot', 'công nghệ Iot'
// ,'công nghệ internet vạn vật', 'Công nghệ internet vạn vật', 'công nghệ Internet vạn vật', 'cn internet vạn vật'
// ]

//  const arrKey = ['ktdkvtdh', 'kt dieu khien va tu dong hoa', 'ki thuat dieu khien va tu dong hoa'
//  , 'ky thuat dieu khien va tu dong hoa', 'Ki thuat dieu khien va tu dong hoa'
//  ,'Ky thuat dieu khien va tu dong hoa', 'kt điều khiển và tự động hóa'
//  , 'kĩ thuật điều khiển và tự động hóa', 'kỹ thuật điều khiển và tự động hóa'
//  , 'Kỹ thuật điều khiển và tự động hóa'
// ,'Kĩ thuật thuật điều khiển và tự động hóa', 'kt điều khiển tự động'
// , 'ki thuat dieu khiển tự động', 'ky thuat dieu khien tu dong'
// , 'kĩ thuật điều khiển tự động','ky thuat điều khiển tự động']

//  const arrKey = ['cndpt', 'cn da phuong tien', 'Cn da phuong tien', 'cong nghe da phuong tien', 'Cong nghe da phuong tien',
//  'công nghệ đa phương tiện', 'Công nghệ đa phương tiện', 'Cn đa phương tiện', 'cn đa phương tiện']

//  const arrKey = ['qtkd', 'qt kinh doanh', 'quan tri kinh doanh', 'Quan tri kinh doanh', 'Qt kinh doanh'
//  ,'Qt trị kinh doanh', 'quản trị kinh doanh', 'Quản trị kinh doanh']

//   const arrKey = ['mkt', 'Mkt', 'MKT', 'Marketing','marketing']
//   const arrKey = ['kt', 'KT' ,'Kt', 'ke toan','Ke toan','kế toán','Kế toán']

//  const arrKey = ['ktdtvt', 'KTDTVT', 'ky thuat dien tu vien thong', 'kỹ thuật điện tử viễn thông'
//  , 'kt dien tu vien thong','kt điện tử viễn thông', 'ki thuat dien tu vien thong', 'kĩ thuật điện tử viễn thông'
//  , 'Kỹ thuật điện tử viễn thông', 'Ky thuat dien tu vien thong'
// ,'Ki thuat dien tu vien thông', 'ki thuat dien tu vien thong', 'Kt dien tu vien thong', 'điện tử viễn thông'
// , 'dien tu vien thong','Điện tử viễn thông', 'Dien tu vien thong']

//  const arrKey = ['aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa','aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa'
// ,'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa'
//, 'aaaaaaa','aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa'
// ,'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa'
// ,'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa'
// ,'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa']

// generateTongquan("kt")
// generateByOrder("kt")

// generateBySelect("kt", objFlagCoso)

const multObj = {
    "cntt": ["cntt", "it", "CNTT", "It", "iT", "IT", "cong nghe thong tin", "cong nghe tt", "Cong nghe thong tin", "Cong nghe tt","công nghệ thông tin", "công nghệ tt", "Công nghệ thông tin", "Công nghệ tt"
, "cn thong tin", "Cn thong tin", "cn thông tin", "Cn thông tin"],
    "ktddt": ['ktddt', 'KTDDT', 'điện điện tử', 'điện tử', 'ki thuat dien dien tu', 'Ki thuat dien dien tu', 'ky thuat dien dien tu',
     'Ky thuat dien dien tu', 'kt dien dien tu', 'Kt dien dien tu', 'kt điện điện tử', 'Kt điện điện tử', 'dien tu', 'dien dien tu',
        'kĩ thuật điện điện tử', 'Kĩ thuật điện điện tử', 'kỹ thuật điện điện tử', 'Kỹ thuật điện điện tử', 
     'kt điện điện tử', 'Kt điện điện tử'],
     "attt": ['attt', 'ATTT', 'Attt', 'an toan thong tin', 'an toan tt', 'bao mat', 'An toan thong tin',
     'An toan tt', 'an toàn thông tin', 'an toàn tt', 'An toàn thông tin', 'An toàn tt'],
    "iot": ['iot', 'IOt', 'ioT', 'IOT', 'cong nghe iot','cn iot', 'Cong nghe IOT', 'Cong nghe iot', 'Cong nghe Iot', 'cong nghe iot'
    ,'cong nghe Iot', 'cong nghe internet van vat', 'Cong nghe internet van vat', 'cong nghe Internet van vat', 'cn internet van vat','Công nghệ IOT'
    , 'Công nghệ iot', 'Công nghệ Iot', 'công nghệ iot', 'công nghệ Iot'
    ,'công nghệ internet vạn vật', 'Công nghệ internet vạn vật', 'công nghệ Internet vạn vật', 'cn internet vạn vật'
    ],
    "ktdkvtdh": ['ktdkvtdh', 'kt dieu khien va tu dong hoa', 'ki thuat dieu khien va tu dong hoa'
     , 'ky thuat dieu khien va tu dong hoa', 'Ki thuat dieu khien va tu dong hoa'
     ,'Ky thuat dieu khien va tu dong hoa', 'kt điều khiển và tự động hóa'
     , 'kĩ thuật điều khiển và tự động hóa', 'kỹ thuật điều khiển và tự động hóa'
     , 'Kỹ thuật điều khiển và tự động hóa'
    ,'Kĩ thuật thuật điều khiển và tự động hóa', 'kt điều khiển tự động'
    , 'ki thuat dieu khiển tự động', 'ky thuat dieu khien tu dong'
    , 'kĩ thuật điều khiển tự động','ky thuat điều khiển tự động'],
    "cndpt": ['cndpt', 'cn da phuong tien', 'Cn da phuong tien', 'cong nghe da phuong tien', 'Cong nghe da phuong tien',
     'công nghệ đa phương tiện', 'Công nghệ đa phương tiện', 'Cn đa phương tiện', 'cn đa phương tiện'],
     "qtkd": ['qtkd', 'qt kinh doanh', 'quan tri kinh doanh', 'Quan tri kinh doanh', 'Qt kinh doanh'
      ,'Qt trị kinh doanh', 'quản trị kinh doanh', 'Quản trị kinh doanh'],
      "mkt":['mkt', 'Mkt', 'MKT', 'Marketing','marketing'],
      "kt": ['kt', 'KT' ,'Kt', 'ke toan','Ke toan','kế toán','Kế toán']

}

const multObjPhu = {
    "thoi_gian_dao_tao": ['thoi gian dao tao', 'thời gian đào tạo', 'Thời gian đào tạo', 'Thoi gian dao tao', 'thời gian học'
                            ,'thoi gian hoc', 'Thời gian học', 'Thoi gian hoc', 'thời gian', 'Thoi gian'
                            ,'Thời gian', 'học mấy năm', 'hoc may nam', 'đào tạo mấy năm',
                            ,'dao tao may nam', 'đào tạo bao lâu', 'dao tao bao lau', 'Đào tạo bao lâu',
                            ,'Dao tao bao lau', 'thời gian học tập', 'thoi gian hoc tap', 'Thời gian học tập',
                            ,'Thoi gian hoc tap',
                         ],
    "hoc_phi": ['hoc phi', 'học phí', 'Học phí', 'tiền', 'Tiền','Hoc phi', 'tien', 'Tien', 'chi phí', 'Chi phí'
                        ,'chi phi', 'Chi phi', 'tổng tiền', 'tong tien'
                        , 'Tong tien','Tổng tiền', 'số tiền', 'so tien', 'Số tiền', 'So tien'
                    ],
    "sotc": ["sotc", "số tín chỉ", "Số tín chỉ", "so tin chi", "So tin chi", "Tín chỉ", "tin chi", "tín chỉ", "Tin chi"],
    "chuyen_nganh": ["chuyên ngành", "chuyen nganh", "chuyên ngành", "Chuyen nganh"],
    "diem_chuan": ["diem_chuan", "diem chuan", "điểm chuẩn", "Điểm chuẩn", "Diem chuan", "điểm trúng tuyển", "diem trung tuyen", "Điểm trúng tuyển", "Diem trung tuyen"],
    "khoi_thi": ["khoi thi", "khối thi", "Khoi thi", "Khối thi", "to hop xet tuyen", "tổ hợp xét tuyển", "To hop xet tuyen", "Tổ hợp xét tuyển"
    , "To hop mon", "tổ hợp môn", "to hop mon", "khoi_thi", "khoi_thi"],
    "chuong_trinh_dao_tao": ["chuong trinh dao tao", "chương trình đào tạo","Chuong trinh dao tao","Chương trình đào tạo"],
    "tong_quan":[
     "tong quan", "tổng quan", "Tong quan", "Tổng quan", "khái quát", "khai quat", "Khái quát", "Khai quat"
    , "gioi thieu", "giới thiệu", "Giới thiệu", "Gioi thieu", "tom tat", "tóm tắt", "Tom tat", "Tóm tắt"

    ],
    "ma_nganh":[
        "ma nganh", "Mã ngành", "mã ngành", "Mã Ngành", "Ma nganh", "Ma Nganh"
    ],
    "tot_nghiep_lam_gi": ["tot nghiep lam gi", "lam gi", "làm gì", "tốt nghiệp làm gì", "làm công việc gì"
    , "lam cong viêc gi", "làm vị trí nào", "lam vi tri nao", "Lam gi", "Làm gì", "Tốt nghiệp làm gì", "Làm công việc gì"
    , "Lam cong viec gi", "Làm vị trí nào", "Lam vi tri nao", "Tot nghiep lam gi", "Tốt nghiệp làm gì", "lam duoc gi", "làm được gì"
    , "Làm được gì", "Lam duoc gi", "lam nhung cong viec gi", "làm những công việc gì", "làm những công việc nào", "lam nhung cong viec nao"
    , "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsdf", "sdfsdfsdf"
    ]
}

multipleGenerateBySelect(multObj, objFlagCoso);
