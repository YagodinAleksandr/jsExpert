(function(){

    let btn = document.getElementById('addUnit'),
        filters = document.getElementById('filters'),
        parent = document.getElementById('galeryBlock'),
        modalWindow = document.getElementById('warningModal'),
        btnClose = document.getElementById('closeModal');

    let galleryData = galleryService.getGalaryData();
    let displayConfig = galleryService.getDisplayConfig(galleryData);

    let setLocalStorage = () => {
        galleryService.setLocalStorage(displayConfig);
    };

    let counter = (config) => {
        galleryService.setCounter(config);
    };

    let apllyConfig = () => {
        galleryData = galleryService.modifyDisplayArrayConfig(displayConfig.arrayConfig, galleryData);
        setLocalStorage();
    };

    let buildGallery = (galleryData) => {
        parent.innerHTML = galleryService.printResult(galleryData);
    };

    let addUnit = () => {
        displayConfig.arrayConfig = galleryService.showUnit(displayConfig.arrayConfig, modalWindow);
        apllyConfig();
        counter(displayConfig.arrayConfig);
        galleryService.checkUnitQuantity();
        buildGallery(galleryData);
    };

    let deleteUnit = (event) => {
        displayConfig.arrayConfig = galleryService.hideUnit(event, displayConfig.arrayConfig);
        apllyConfig();
        counter(displayConfig.arrayConfig);
        galleryService.checkUnitQuantity();
        buildGallery(galleryData);
    };

    let sortData = (event) => {
        displayConfig = galleryService.sortGalery(event, displayConfig, galleryData);
        apllyConfig();
        buildGallery(galleryData);
    };

    let closeModal = () => {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('fade');
    };

    let setFilter = () => {
        let i = displayConfig.sortMethod;
        filters.children[i].setAttribute('selected', 'selected');
    };

    let initListeners = () => {
        btn.addEventListener('click', addUnit);
        parent.addEventListener('click', deleteUnit);
        filters.addEventListener('change', sortData);
        btnClose.addEventListener('click', closeModal);
    };

    function init() {
        initListeners();
        apllyConfig();
        setFilter();
        counter(displayConfig.arrayConfig);
        buildGallery(galleryData);
    };

    init();
})()
