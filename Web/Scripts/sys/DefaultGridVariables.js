﻿// set default variables.
var TitlePage = "",
    modalDialog = "addModal",
    formName = "addForm", // master form and defalut
    detailsForm = "detailsForm",
    gridId = 'itemsDataTable',
    //gridId = 'itemsDataTableDetails',
    //gridId = 'itemsDataTableDetails',
    mainServiceUrl = sUrl = "/api/data/",
    deleteModalDialog = 'deleteModal',
    tableName = "", // grid or master tabel
    tableDetails = "", // details form table
    pKey = "", // prim key for master
    pKeyDetails = "", // prim key for details
    gridColumns = [], // master grid columns
    gridColumnsDetails = [], // details grid columns
    hijriDates = [],
    hidienDates = [],// grid columns
    FormulaFields = [],
    FormulaValues = [],
    controlSearch = "",
    controlSearchResult = "",
    funNameSearch = "",
    idUpdatevalue = "",
    procedureName = "";
monthNames = ['المحرّم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الاول', 'جمادى الآخر', 'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
    flagReport_Properites = 0,
    flagReportandLook = 0;
