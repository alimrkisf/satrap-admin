import { ka_GE } from '@faker-js/faker';

const locales = {
  en: {
    brand: 'Satrapsazeh',
    brand_title: 'Opartion Control System',
    welcome: 'Welcome Back...!',
    selectAll: 'Select All',
    selected: 'Selected {selected} Items',
    filtered: 'Filtered {filtered}',
    rmFilters: 'Remove Filters',
    showFilters: 'Show Filters',
    hideFilters: 'Hide Filters',
    back: 'Back',
    next: 'Next',
    refresh: 'Refresh',
    create: 'Create',
    update: 'Update',
    change_status: 'Change Status',
    delete: 'Delete',
    ignore: 'Ignore',
    ok: 'OK',
    deleteMessage: 'Are you sure you want to delete this item?',
    selectItems: 'Please select the desired items',
    moreResult: 'Change filters to see more results',
    nothing: 'Nothing found!',
    more: 'More...',
    continue: 'Continue',
    acceptOrder: 'Accept Order',

    // Menu
    dashboard: 'Dashboard',
    setting: 'Setting',
    app: 'Summury',
    users: 'Users',
    services: 'Services',
    orders: 'Orders',
    ordersList: 'Orders List',
    newOrder: 'New Order',

    // Forms
    login: 'Login',
    id: 'ID',
    title: 'Title',
    alias: 'Alias',
    name: 'Name',
    role: 'Role',
    details: 'Details',
    cost: 'Cost',
    number: 'Number',
    status: 'Status',
    manager: 'Manager',
    managment: 'Managment',
    activity: 'Activity',
    active: 'Active',
    inactive: 'In Active',
    firstname: 'Firstname',
    lastname: 'Lastname',
    username: 'Username',
    password: 'Password',
    cellphone: 'Cellphone',
    phone_number: 'Phone number',
    statusCode: 'Status Code',
    nationalCode: 'National Code',
    birthDate: 'Birth Date',
    start_date: 'Start Date',
    start_time: 'Start Time',
    end_date: 'End Date',
    end_time: 'End Time',
    serialNumber: 'Serial Number',
    specialist: 'Specialist',
    email: 'Email',
    address: 'Address',
    gender: 'Gender',
    needActivation: 'Need Activation?',
    password_forget: 'Forget Password',
    do: 'Do',

    natural: 'Natural',
    legal: 'Legal',

    registered: 'Registered',
    doing: 'Doing',
    done: 'Done',
    suspend: 'Suspend',
    canceled: 'Canceled',

    ready: 'Ready',
    unready: 'Unready',

    dont: 'Dont',
    man: 'Man',
    woman: 'Woman',
    price: 'Price',
    lab: 'Lab',
    financialSituation: 'Financial Situation',
    insuranceType: 'Insurance Type',
    demandDate: 'Demand Date',
    description: 'Description',
    bill_number: 'Bill Number',
    baskul_cost: 'Baskul Cost',
    baskul_amount: 'Baskul Amount',
    tonnage: 'Tonnage',
    coefficient: 'Coefficient',
    office: 'Office',

    user_status: 'User Status',
    creator: 'Creator',
    updator: 'Updator',
    supervisor: 'Supervisor',
    employer: 'Employer',
    stop_dueto: 'Stop Due to',
    site: 'Site',
    sites: 'Sites',
    create_site: 'Create Site',
    edit_site: 'Edit Site',
    create_user: 'Create User',
    edit_user: 'Edit User',
    siteReports: 'Site Reports',
    site_type: 'Site Type',
    site_status: 'Site Status',
    site_types: 'Site Types',
    driver: 'Driver',
    owner: 'Owner',
    task: 'Task',
    tasks: 'Tasks',
    create_task: 'Create Task',
    edit_task: 'Edit Task',
    task_type: 'Task Type',
    task_types: 'Task Types',
    task_status: 'Task Status',
    food_status: 'Food Status',
    tiriffs: 'Tiriffs',
    plaque: 'Plaque',
    vehicle: 'Vehicle',
    create_vehicle: 'Create Vehicle',
    edit_vehicle: 'Edit Vehicle',
    vehicles: 'Vehicles',
    vehicle_type: 'Vehicle Type',
    vehicle_types: 'Vehicles Types',
    vehicle_status: 'Vehicle Status',
    shift: 'Shift',
    shift_type: 'Shift Type',
    shift_types: 'Shift Types',
    material_type: 'Material Type',
    material_types: 'Material Types',
    operation: 'Operation',
    operation_type: 'Operation Type',
    operation_types: 'Operation Types',
    contract: 'Contract',
    contracts: 'Contracts',
    create_contract: 'Create Contract',
    edit_contract: 'Edit Contract',
    tariff: 'Tariff',
    tariffs: 'Tariffs',
    create_tariff: 'Create Tariff',
    edit_tariff: 'Edit Tariff',
    contract_type: 'Contract Type',
    contract_types: 'Contract Types',
    workshop: 'Workshop',
    workshops: 'Workshops',
    create_workshop: 'Create Workshop',
    edit_workshop: 'Edit Workshop',
    workshop_status: 'Workshop status',
    created_date: 'Creating date',
    forecast_amount: 'Forecast Amount',
    contractual_number: 'Contractual Number',
    civil_project: 'Civil Project',
    is_civil: 'Is Civil',
    not_civil: 'Not Civil',

    carrying_cargo: 'Carrying Cargo',
    excavation: 'Excavation',
    quarrying: 'Quarrying',
    packet: 'Packet',
    picor: 'Picor',
    leveling: 'Leveling',
    pit_consolidation: 'Pit Consolidation',
    shot_and_filling: 'Shot And Filling',
    wiating: 'Wiating',

    service: 'Service',
    tonnage: 'Tonnage',
    houry: 'Houry',
    shift: 'Shift',

    debris: 'Debris',
    rocks: 'Rocks',
    gravel: 'Gravel',
    sand_dune: 'Sand Dune',
    sand: 'Sand',
    pea_gravel: 'Pea Gravel',
    sandy_loam: 'Sandy Loam',
    oversize: 'Oversize',

    morning: 'Morning',
    night: 'Night',

    user: 'User',
    manager: 'Manager',
    operator: 'Operator',
    workshop_manager: 'Workshop Manager',
    workshop_operator: 'Workshop Operator',
    workshop_supervisor: 'Workshop Supervisor',
    site_manager: 'Site Manager',
    financial_manager: 'Financial Manager',
    driver: 'Driver',

    waiting_for_activate: 'Waiting For Activate',
    verified: 'Verified',
    deactive: 'Deactive',
    deleted: 'Deleted',

    mine: 'Mine',
    furnace: 'Furnace',
    defile: 'Defile',
    desert: 'Desert',

    single_truck: 'Single Truck',
    double_truck: 'Double Truck',
    excavator: 'Excavator',
    loader_truck: 'Loader Truck',

    in_pending: 'In Pending',
    in_operation: 'In Operation',
    finished: 'Finished',

    doing: 'Doing',
    done: 'Done',
    supervisor_confirmed: 'Supervisor Confirmed',
    reviewed: 'Reviewed',
    workshop_manager_confirmed: 'Workshop Manager Confirmed',
    canceled_by_driver: 'Canceled By Driver',
    canceled_by_supervisor: 'Canceled By Supervisor',
    suspended: 'Suspended',
    finished: 'Finished',

    // Models
    ActionsCostWidget: 'ActionsCostWidget',
    OrdersStatusWidget: 'OrdersStatusWidget',
    PaymentsStatusWidget: 'PaymentsStatusWidget',
    PaymentsTypesWidget: 'PaymentsTypesWidget',
    RegionsWidget: 'RegionsWidget',
    RolesWidget: 'RolesWidget',
    ShippingsWidget: 'ShippingsWidget',
    ShippingsTypeWidget: 'ShippingsTypeWidget',
    UsersStatusWidget: 'UsersStatusWidget',
    CustomersWidget: 'CustomersWidget',
    CustomersWidget: 'CustomersWidget',
    OperatorsWidget: 'OperatorsWidget',
    UsersWidget: 'UsersWidget',
    OrdersWidget: 'OrdersWidget',
  },
  fa: {
    brand: 'ساتراپ سازه',
    brand_title: 'سامانه کنترل عملیات عمرانی',
    welcome: 'خوش آمدید...!',
    selectAll: 'انتخاب همه',
    selected: 'رکورد انتخاب شده {selected}',
    filtered: 'فیلتر شده {filtered}',
    rmFilters: 'پاک کردن فیلترها',
    showFilters: 'نمایش فیلترها',
    hideFilters: 'مخفی کردن فیلترها',
    back: 'قبل',
    next: 'بعد',
    refresh: 'تازه سازی',
    create: 'ایجاد',
    update: 'ویرایش',
    change_status: 'تغییر وضعیت',
    delete: 'حذف',
    ignore: 'فعلا نه',
    ok: 'تایید',
    deleteMessage: 'آیا از حدف این مورد اطمینان دارید؟',
    selectItems: 'لطفا آیتم های مورد نظر را انتخاب کنید',
    moreResult: 'برای مشاهده نتایج بیشتر فیلترها را تغییر دهید',
    nothing: 'موردی یافت نشد!',
    more: 'بیشتر...',
    continue: 'ادامه',
    doctor: 'دکتر',
    acceptOrder: 'قبول سفارش',

    // Menu
    dashboard: 'میزکار',
    setting: 'تنظیمات',
    app: 'خلاصه وضعیت',
    users: 'کاربران',
    services: 'خدمات',
    orders: 'سفارشات',
    ordersList: 'لیست سفارشات',
    newOrder: 'ثبت سفارش',

    // Forms
    login: 'ورود',
    id: 'شناسه',
    title: 'عنوان',
    alias: 'نام مستعار',
    name: 'نام',
    role: 'نقش',
    cost: 'هزینه',
    number: 'شماره',
    details: 'توضیحات',
    status: 'وضعیت',
    manager: 'مدیر',
    managment: 'مدیریت',
    activity: 'وضعیت فعالیت',
    active: 'فعال',
    inactive: 'غیرفعال',
    firstname: 'نام',
    lastname: 'نام خانوادگی',
    username: 'نام کاربری',
    password: 'گذرواژه',
    cellphone: 'تلفن همراه',
    phone_number: 'شماره همراه',
    statusCode: 'کد وضعیت',
    nationalCode: 'کد ملی',
    birthDate: 'تاریخ تولد',
    start_date: 'تاریخ شروع',
    start_time: 'زمان شروع',
    end_date: 'تاریخ پایان',
    end_time: 'زمان پایان',
    serialNumber: 'شماره سریال',
    email: 'پست الکترونیک',
    address: 'آدرس',
    gender: 'جنسیت',
    needActivation: 'نیاز به فعالسازی؟',
    password_forget: 'Forget Password',
    password_forget: 'فراموشی رمز عبور',
    do: 'دارد',

    natural: 'حقیقی',
    legal: 'حقوقی',

    registered: 'ثبت شده',
    doing: 'در حال انجام',
    done: 'انجام شده',
    suspend: 'معلق',
    canceled: 'لغو شده',

    ready: 'آماده',
    unready: 'غیرآماده',

    dont: 'ندارد',
    man: 'آقا',
    woman: 'خانم',
    price: 'قیمت',
    financialSituation: 'وضعیت مالی',
    demandDate: 'تاریخ درخواست',
    description: 'توضیحات',
    bill_number: 'شماره قبض',
    baskul_cost: 'هزینه باسکول',
    baskul_amount: 'مقدار باسکول',
    tonnage: 'تناژ',
    coefficient: 'ضریب',

    user_status: 'وضعیت‌های کاربر',
    creator: 'ایجاد کننده',
    updator: 'بروزرسانی کننده',
    supervisor: 'ناظر',
    employer: 'کارمند',
    stop_dueto: 'علت توقف',

    site: 'محل تخلیه',
    sites: 'محل‌‌ها‌ی تخلیه',
    create_site: 'ایجاد محل تخلیه',
    create_user: 'ایجاد کاربر',
    EDIT_user: 'ویرایش کاربر',
    siteReports: 'گزارشات محل',
    site_type: 'نوع محل',
    site_status: 'وضعیت محل',
    site_types: 'انواع محل تخلیه',
    driver: 'راننده',
    owner: 'مالک',
    task: 'فعالیت',
    tasks: 'فعالیت‌ها',
    create_task: 'ایجاد فعالیت',
    edit_task: 'ویرایش فعالیت',
    task_type: 'نوع فعالیت',
    task_types: 'انواع فعالیت',
    task_status: 'وضعیت فعالیت',
    food_status: 'وضعیت غذا',
    plaque: 'پلاک',
    vehicle: 'ماشین',
    create_vehicle: 'ایجاد ماشین',
    edit_vehicle: 'ویرایش ماشین',
    vehicles: 'ماشین آلات',
    vehicle_type: 'نوع ماشین',
    vehicle_types: 'انواع ماشین آلات',
    vehicle_status: 'وضعیت ماشین',
    shift: 'شیفت کاری',
    shift_type: 'نوع شیفت کاری',
    shift_types: 'انواع شیفت کاری',
    material_type: 'نوع مصالح',
    material_types: 'انواع مصالح',
    operation: 'کارکرد',
    operation_type: 'نوع کارکرد',
    operation_types: 'انواع کارکرد',
    contract: 'قرارداد',
    contracts: 'قراردادها',
    create_contract: 'ایجاد قرارداد',
    edit_contract: 'ویرایش قرارداد',
    tariff: 'تعرفه',
    tariffs: 'تعرفه‌ها',
    create_tariff: 'ایجاد تعرفه',
    edit_tariff: 'ویرایش تعرفه',
    contract_type: 'نوع قرارداد',
    contract_types: 'انواع قرارداد',
    workshop: 'کارگاه',
    workshops: '‌کارگاه‌ها',
    create_workshop: 'ایجاد کارگاه',
    edit_workshop: 'ویرایش کارگاه',
    workshop_status: 'وضعیت کارگاه',
    created_date: 'تاریخ ایجاد',
    forecast_amount: 'مقدار پیشبینی',
    contractual_number: 'شماره ردیف پیمان',
    civil_project: 'پروژه عمرانی',
    is_civil: 'عمرانی است',
    not_civil: 'عمرانی نیست',

    carrying_cargo: 'حمل بار',
    excavation: 'خاک برداری',
    quarrying: 'سنگ برداری',
    packet: 'پاکت',
    picor: 'پیکور',
    leveling: 'تسطیح و ریگلاژ',
    pit_consolidation: 'تحکیم گود',
    shot_and_filling: 'شات و فیلینگ',
    wiating: 'در انتظار',

    service: 'سرویس',
    tonnage: 'تن',
    houry: 'ساعت',
    shift: 'شیفت',

    debris: 'نخاله',
    rocks: 'سنگ',
    gravel: 'شن',
    sand_dune: 'بادامی',
    sand: 'ماسه',
    pea_gravel: 'نخودی',
    sandy_loam: 'ماسه بادی',
    oversize: 'اورسایز',

    morning: 'صبح',
    night: 'شب',

    user: 'کاربر',
    manager: 'مدیر کل',
    operator: 'اپراتور سامانه',
    workshop_manager: 'مدیر کارگاه',
    workshop_operator: 'اپراتور کارگاه',
    workshop_supervisor: 'ناظر کارگاه',
    site_manager: 'مدیر محل',
    financial_manager: 'مدیر مالی',
    driver: 'راننده',

    company_ceo: 'مدیر شرکت',

    waiting_for_activate: 'در انتظار فعال‌سازی',
    verified: 'تایید شده',
    deactive: 'غیر فعال',
    deleted: 'حذف شده',

    mine: 'معدن',
    furnace: 'کوره',
    defile: 'گردنه',
    desert: 'بیابان',

    single_truck: 'کامیون تک',
    double_truck: 'کامیون جفت',
    excavator: 'بیل',
    loader_truck: 'لودر',

    in_pending: 'در حال راه اندازی',
    in_operation: 'در حال فعالیت',
    finished: 'اتمام کار',

    doing: 'در حال انجام',
    done: 'انجام شده',
    supervisor_confirmed: 'تایید شده توسط ناظر',
    reviewed: 'بررسی شده',
    workshop_manager_confirmed: 'تایید شده توسط مدیر کارگاه',
    canceled_by_driver: 'لغو شده توسط راننده',
    canceled_by_supervisor: 'لغو شده توسط ناظر',
    suspended: 'معلق',
    finished: 'اتمام یافته',

    runing: 'در حال فعالیت',
    repairing: 'در حال تعمیر',
    stoped: 'متوقف',
    idle: 'بیکار',

    // Models
    ActionsCostWidget: 'تعرفه خدمات',
    ActionsWidget: 'خدمات',
    OrdersStatusWidget: 'وضعیت های سفارش',
    PaymentsStatusWidget: 'وضعیت های پرداخت',
    PaymentsTypesWidget: 'روش های پرداخت',
    RegionsWidget: 'مناطق',
    RolesWidget: 'نقش ها',
    ShippingsWidget: 'حمل و نقل',
    ShippingsTypeWidget: 'روش های حمل',
    UsersStatusWidget: 'وضعیت های کاربر',
  },
};

export default locales;
