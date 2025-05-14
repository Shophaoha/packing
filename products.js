const hck_products = {
    'product-thumbnail': {
        name: "Túi hút chân không",
        number: 1,
        category: "Vật tư",
        image: "Image/Tui hut chan khong PA/7.png",
        sizes: ["10x15 cm", "15x20 cm",
                "20x25 cm", "25x30 cm", 
                "30x40 cm"],
        prices: [105000,105000,105000,105000,105000],
        materials: []
    },
    'product-thumbnai-cuon-mang-hck': {
        name: "Cuộn túi hút chân không",
        number: 1,
        category: "Vật tư",
        image: "Image/Cuon tui hut chan khong/30 cm.png",
        sizes: ["5 Cuộn túi 15x500 cm ", "5 Cuộn túi 20x500 cm ", "5 Cuộn túi 25x500 cm ", "5 Cuộn túi 30x500 cm "],
        prices: [190000, 240000, 290000, 340000],
        materials: []
    },
    'product-thumbnail_P290B': {
        name: "Máy Hút Chân Gia Đình",
        number: 1,
        category: "Máy Móc",
        image: ["Image/Mayhutchankhong/P-290B-1.png"],
        sizes: ["P-290B"],
        prices: [2800000],
        materials: []
    },
    'product-thumbnail_DZ400': {
        name: "Máy Hút Chân Không Buồng Đơn",
        number: 1,
        category: "Máy Móc",
        image: ["Image/May/dz400_805x728.png",
                "Image/May/dz500_805x728.png", 
                "Image/May/dz600_805x728.png",
                "Image/May/dz260_805x728.png"],
        sizes: ["400 mm", "500 mm", "600 mm","260 mm"],
        prices: [19000000,22000000,32000000,4300000],
        materials: []
    },
    'product-thumbnail_DZQ400': {
        name: "Máy Hút Chân Không 2 Buồng",
        number: 1,
        category: "Máy Móc",
        image: ["Image/May/dzd400_805x728.png",
                "Image/May/dzd500_805x728.png", 
                "Image/May/dzd600_805x728.png"],
        sizes: ["400 mm", "500 mm", "600 mm"],
        prices: [31800000,38800000,50000000],
        materials: []
    },
    'product-thumbnail_VS500': {
        name: "Máy Hút Chân Không Vòi Ngoài",
        number: 1,
        category: "Máy Móc",
        image: ["Image/May/vs500_805x728.png",
                "Image/May/vs600_805x728.png", 
                "Image/May/vs800_805x728.png",
                "Image/May/vs1000_805x728.png"],
        sizes: ["VS500-1V", "VS600-1V", "VS800-2V","VS1000-2V"],
        prices: [14990000,22000000,32000000,38500000],
        materials: []
    },
    'product-thumbnail_LD660': {
        name: "Máy Hút Chân Không Chè",
        number: 1,
        category: "Máy Móc",
        image: ["Image/May/ld660_805x728.png",
                "Image/May/ld820_805x728.png", 
                "Image/May/ld1000_805x728.png"],
        sizes: ["660 mm", "820 mm", "1000 mm"],
        prices: [23000000,28000000,33500000],
        materials: []
    },
};

// Xuất biến products để có thể dùng ở file khác

const cm_products = {
    'product-thumbnail_tui_co_pof': {
        name: "1000 Túi POF đa kích thước",
        number: 2,
        category: "Vật tư",
        image: "Image/MangcoPOF/tui_co_pof_805x728.png",
        sizes: ["10x15 cm", "15x20 cm", 
                "20x25 cm","25x30 cm", 
                "30x40 cm"],
        prices: [250000,330000,440000,550000,750000],
        materials: []
    },
    'product-thumbnail_mc_pof': {
        name: "Cuộn Màng co POF",
        number: 2,
        category: "Vật tư",
        image: "Image/MangcoPOF/mang_co_pof_805x728.png",
        sizes: ["260mm", "300mm", "330mm", "400mm", "450mm", "500mm"],
        prices: [540000, 630000, 690000, 830000, 935000, 1038000],
        materials: []
    },
    'product-thumbnai_mc_pe': {
        name: "Cuộn Màng co PE",
        number: 2,
        category: "Vật tư",
        image: "Image/MangcoPOF/mang_co_pe_805x728.png",
        sizes: [],
        prices: [2000000],
        materials: []
    },
    'product-thumbnail_may_co_mang': {
        name: "Máy co màng đa dạng kích thước",
        number: 2,
        category: "Máy Móc",
        image: ["Image/May/bs4020_805x728.png",
                "Image/May/bs4535_805x728.png", 
                "Image/May/bs6040_805x728.png"],
        sizes: ["400 * 200 mm", "450 * 350 mm", "600 * 400 mm"],
        prices: [10000000, 12000000, 17000000],
        materials: []
    },
    'product-thumbnail_may_cat_mang_dap_tay': {
        name: "Máy cắt màng dập tay",
        number: 2,
        category: "Máy Móc",
        image: ["Image/May/F200_805x728.png",
                "Image/May/F300_805x728.png", 
                "Image/May/F400_805x728.png"],
        sizes: ["200 mm", "300 mm", "400 mm"],
        prices: [220000, 324000, 466000],
        materials: []
    },
};

const indate_products = {
    'product-thumbnail_muc_in_TIJ': {
        name: "Mực TIJ cao cấp",
        number: 3,
        category: "Vật tư",
        image: ["Image/inphun/inkjet_cartridge_resized_805x728.png",
                "Image/inphun/inkjet_logo_805x728_updated.png"],
        sizes: ["25.4mm", "12.7mm"],
        prices: [2000000,2000000],
        materials: []
    },
    'product-thumbnail_indate_cam_tay': {
        name: "Máy Indate Cầm Tay Cao Cấp",
        number: 3,
        category: "Máy Móc",
        image: ["Image/May/T10_805x728.png",
                "Image/May/T20_805x728.png",
                "Image/May/T50_805x728.png"
        ],
        sizes: ["12.7mm", "25.4mm", "50.8mm"],
        prices: [4999999, 10850000, 27500000],
        materials: []
    },
    'product-thumbnail_indate_T110E': {
        name: "Máy in phun T110E",
        number: 3,
        category: "Máy Móc",
        image: "Image/May/t110e_805x728.png",
        sizes: ["12.7mm"],
        prices: [14500000],
        materials: []
    },
    'product-thumbnail_indate_s10': {
        name: "Máy in phun cao cấp 12.7mm",
        number: 3,
        category: "Máy Móc",
        image: ["Image/May/s10_805x728.png",
                "Image/May/s10-2_805x728.png",
                "Image/May/s10-4_805x728.png",
                "Image/May/s10-6_805x728.png"],
        sizes: ["12.7mm", "12.7mm * 2", "12.7mm * 4", "12.7mm * 6"],
        prices: [22700000, 40750000, 55000000, 95000000],
        materials: []
    },
    'product-thumbnail_indate_s20': {
        name: "Máy in phun cao cấp 25.4mm",
        number: 3,
        category: "Máy Móc",
        image: ["Image/May/s20_805x728.png",
                "Image/May/s20-2_805x728.png",
                "Image/May/s20-4_805x728.png",
                "Image/May/s20-6_805x728.png"],
        sizes: ["25.4mm", "25.4mm * 2", "25.4mm * 4", "25.4mm * 6"],
        prices: [30000000, 41000000, 72000000, 109000000],
        materials: []
    },
    'product-thumbnail_indate_CIJ': {
        name: "Máy in phun liên tục S200PLUS",
        number: 3,
        category: "Máy Móc",
        image: ["Image/May/s200_805x728.png"],
        sizes: ["S200PLUS"],
        prices: [130500000],
        materials: []
    },
};

const dongdai_products = {
    'product-thumbnail_day_dai_pp': {
        name: "Dây Đai PP",
        number: 4,
        category: "Vật tư",
        image: "Image/dongdai/day_dai_pp_805x728.png",
        sizes: ["14mm"],
        prices: [350000],
        materials: []
    },
    'product-thumbnail_day_dai_pet': {
        name: "Dây Đai PET",
        number: 4,
        category: "Vật tư",
        image: "Image/dongdai/day_dai_pet_805x728.png",
        sizes: ["16mm"],
        prices: [590000],
        materials: []
    },
    'product-thumbnai_dong_dai_jd13': {
        name: "Máy Đóng Đai Cầm Tay JD13/16",
        number: 4,
        category: "Máy Móc",
        image: "Image/May/jdc13_16_805x728.png",
        sizes: ["JD13/16"],
        prices: [17000000],
        materials: []
    },
    'product-thumbnail_dong_dai_q31': {
        name: "Máy Đóng Đai Cầm Tay Tự Động Q31",
        number: 4,
        category: "Máy Móc",
        image: "Image/May/q31_805x728.png",
        sizes: ["Q31"],
        prices: [38500000],
        materials: []
    },
};

export default {
    hck_products,
    cm_products,
    indate_products,
    dongdai_products,
};