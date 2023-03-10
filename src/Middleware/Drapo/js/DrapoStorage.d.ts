/// <reference path="../typings/index.d.ts" />
declare class DrapoStorage {
    private _application;
    private _cacheItems;
    private _isDelayTriggered;
    private readonly CONTENT_TYPE_JSON;
    private _lock;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    private AdquireLock;
    private ReleaseLock;
    Retrieve(dataKey: string, sector: string, context: DrapoContext, dataKeyParts?: string[]): Promise<DrapoStorageItem>;
    RetrieveDataItemContext(dataKey: string, sector: string, executionContext?: DrapoExecutionContext<any>): Promise<DrapoStorageItem>;
    RetrieveData(dataKey: string, sector: string, executionContext?: DrapoExecutionContext<any>): Promise<any[]>;
    RetrieveStorageItemsCached(sector: string, dataKeyOrDataGroup: string): DrapoStorageItem[];
    RetrieveDataValue(sector: string, mustache: string): Promise<any>;
    CanGrowData(dataKey: string, sector: string): Promise<boolean>;
    GrowData(dataKey: string, sector: string): Promise<boolean>;
    UpdateData(dataKey: string, sector: string, data: any[] | any, notify?: boolean): Promise<boolean>;
    UpdateDataPath(sector: string, contextItem: DrapoContextItem, dataPath: string[], value: any, canNotify?: boolean): Promise<boolean>;
    ReloadData(dataKey: string, sector: string, notify?: boolean, canUseDifference?: boolean): Promise<boolean>;
    GetSectors(dataKey: string): string[];
    GetSectorDataKeys(sector: string): string[];
    ReloadPipe(dataPipe: string): Promise<boolean>;
    IsMustachePartsDataKey(sector: string, mustacheParts: string[]): boolean;
    IsDataKey(dataKey: string, sector: string, renderContext?: DrapoRenderContext): boolean;
    IsDataKeyExecution(dataKey: string): boolean;
    IsDataKeyDelay(dataKey: string, sector: string): boolean;
    private IsDataKeyElement;
    EnsureDataKeyReady(dataKey: string, sector: string): Promise<number>;
    EnsureDataKeyFieldReady(dataKey: string, sector: string, dataPath: string[]): Promise<boolean>;
    GetData(sector: string, dataPath: string[]): string;
    GetDataKeyField(dataKey: string, sector: string, dataPath: string[], executionContext?: DrapoExecutionContext<any>): string;
    SetDataKeyField(dataKey: string, sector: string, dataFields: string[], value: any, notify?: boolean): Promise<boolean>;
    UpdateDataFieldLookup(dataKey: string, sector: string, dataFieldSeek: string, valueSeek: string, dataField: string | [string], value: any, notify?: boolean): Promise<boolean>;
    RemoveDataItemLookup(dataSource: string, sector: string, dataFieldSeek: string | string[], valueSeek: string, notify?: boolean): Promise<boolean>;
    private RemoveDataItemLookupDataKey;
    private RemoveDataItemLookupMustache;
    private CreatePath;
    private CreateDataPath;
    LoadDataDelayedAndNotify(): Promise<void>;
    RetrieveDataItem(dataKey: string, sector: string, canLoadDelay?: boolean, dataDelayFields?: string[]): Promise<DrapoStorageItem>;
    private RetrieveDataItemInternal;
    private RetrieveDataKey;
    private RetrieveDataKeyUrl;
    private ParseChannels;
    private RetrieveDataChannels;
    private ContainsDataChannel;
    private RetrieveDataChannel;
    private PropagateDataChannels;
    private HasChangeNullOrEmpty;
    private ExtractDataHeaderGet;
    ExtractDataHeaderGetProperty(property: string): string;
    private ExtractDataHeaderSet;
    ExtractDataHeaderSetProperty(property: string): string;
    ResolveDataUrlMustaches(dataKey: string, sector: string, url: string, executionContext: DrapoExecutionContext<any>, changes?: [string, string][]): Promise<string>;
    ResolveDataHeaders(dataKey: string, sector: string, headers: [string, string][], executionContext: DrapoExecutionContext<any>): Promise<[string, string][]>;
    ResolveMustachesRecursive(sector: string, data: string): Promise<string>;
    ResolveMustaches(sector: string, data: string, canSubscribe?: boolean): Promise<string>;
    private ReactivateDataUrlMustache;
    private RetrieveDataKeyInitialize;
    private RetrieveDataKeyInitializeValue;
    private RetrieveDataKeyInitializeArray;
    private RetrieveDataKeyInitializeMapping;
    private RetrieveDataKeyInitializePointer;
    UpdatePointerStorageItems(dataKey: string, dataReferenceKey: string): Promise<void>;
    private RetrieveDataKeyInitializeFunction;
    private RetrieveDataKeyInitializeQueryString;
    private RetrieveDataKeyInitializeQuery;
    private RetrieveDataKeyInitializeSwitch;
    private RetrieveDataKeyInitializeParent;
    private BuildObject;
    private RetrieveDataKeyInitializeObject;
    private RetrieveDataProperty;
    private RetrieveDataPropertyKeyIndex;
    private RetrieveDataKeyConfig;
    private RetrieveDataKeyCookie;
    RetrieveIterator(dataKey: string, dataKeyParts: string[], context: DrapoContext): DrapoStorageItem;
    RetrieveIteratorChild(dataKey: string, dataKeyParts: string[], contextData: any): DrapoStorageItem;
    AddDataItem(dataKey: string, dataPath: string[], sector: string, item: any, notify?: boolean): Promise<boolean>;
    ToggleData(dataKey: string, dataPath: string[], sector: string, item: any, notify?: boolean): Promise<boolean>;
    GetDataItemLast(dataKey: string, sector: string): Promise<any>;
    FlagDataItemAsUpdated(dataKey: string, sector: string, index: number, notify?: boolean): Promise<boolean>;
    NotifyChanges(dataItem: DrapoStorageItem, notify: boolean, dataKey: string, dataIndex: number, dataFields: string[], canUseDifference?: boolean): Promise<void>;
    NotifyNoChanges(dataItem: DrapoStorageItem, notify: boolean, dataKey: string): Promise<void>;
    FlagAsUpdated(dataItem: DrapoStorageItem, index: number): boolean;
    private GetCacheKeyIndex;
    IsDataReady(sector: string, dataKey: string): boolean;
    private GetCacheStorageItem;
    private GetCacheDataItem;
    private AddCacheData;
    FireEventOnNotify(dataKey: string): Promise<void>;
    private RemoveCacheData;
    AppendCacheDataItemBySector(storageItems: DrapoStorageItem[], sector: string): void;
    AddCacheDataItems(storageItems: DrapoStorageItem[]): Promise<void>;
    RemoveBySector(sector: string): Promise<void>;
    DiscardCacheData(dataKey: string, sector: string, canRemoveObservers?: boolean): Promise<boolean>;
    DiscardCacheDataBySector(sector: string): Promise<boolean>;
    DeleteDataItem(dataKey: string, dataPath: string[], sector: string, item: any, notify: boolean): Promise<boolean>;
    DeleteDataItemIndex(dataItem: DrapoStorageItem, index: number): boolean;
    private GetDataItemIndex;
    PostData(dataKey: string, sector: string, dataKeyResponse: string, notify: boolean, executionContext: DrapoExecutionContext<any>): Promise<boolean>;
    PostDataItem(dataKey: string, sector: string, dataKeyResponse: string, notify: boolean, executionContext: DrapoExecutionContext<any>): Promise<boolean>;
    PostDataMapping(dataKey: string, sector: string, dataItem: DrapoStorageItem, notify: boolean, executionContext: DrapoExecutionContext<any>): Promise<boolean>;
    ClearData(dataText: string, sector: string, notify: boolean): Promise<boolean>;
    UnloadData(dataKey: string, sector: string): Promise<boolean>;
    ClearDataToken(): Promise<void>;
    FireEventOnBeforeContainerUnload(sector: string): Promise<void>;
    FireEventOnAfterContainerLoad(sector: string): Promise<void>;
    MoveDataItem(dataKey: string, sector: string, dataMove: any, dataPosition: any, notify: boolean): Promise<boolean>;
    MoveDataIndex(dataKey: string, sector: string, dataMove: any, index: number, notify: boolean): Promise<boolean>;
    ResolveData(executeNoCache: boolean, el?: HTMLElement): Promise<void>;
    ResolveDataElement(executeNoCache: boolean, el: HTMLElement): Promise<void>;
    ResolveDataLoadInternal(executeNoCache: boolean, el: HTMLElement): Promise<void>;
    CreateErrorForStorage(type?: string, message?: string, content?: string): any;
    EnsureDataDelayLoaded(dataItem: DrapoStorageItem, dataPath: string[]): Promise<void>;
    HasChanges(sector: string, dataKey: string): boolean;
    private RetrieveDataItemInternalSystem;
    private CreateDataItemInternal;
    private RetrieveDataItemInternalSystemDebugger;
    private RetrieveDataItemInternalSystemSectors;
    private RetrieveDataItemInternalSystemDataKeysFunction;
    private RetrieveDataItemInternalSystemBreakpoints;
    private RetrieveDataItemInternalSystemNotifys;
    private RetrieveDataItemInternalSystemPipes;
    private RetrieveDataItemInternalSystemErrors;
    private RetrieveDataItemInternalSystemFunctions;
    private RetrieveDataItemInternalSystemComponents;
    private RetrieveDataItemInternalSystemRequests;
    private RetrieveDataItemInternalSystemSectorsUpdate;
    private RetrieveDataItemInternalSystemRuntime;
    private RetrieveDataItemInternalSystemObjects;
    private RetrieveDataItemInternalSystemObjectsExpanded;
    private RetrieveDataItemInternalSystemObjectProperties;
    private RetrieveDataItemInternalSystemObjectData;
    private RetrieveDataItemInternalSystemObjectWatch;
    private RetrieveDataItemInternalSystemObjectsWatchs;
    private RetrieveDataItemInternalSystemObjectsWatchsValues;
    private RetrieveDataItemInternalSystemBrowser;
    private RetrieveDataItemInternalSystemDebuggerProperties;
    private ExecuteQuery;
    private GetQuerySourceObjects;
    private GetQuerySourceObjectsList;
    private EnsureQueryObject;
    private InjectQueryObjectProjections;
    private ResolveQueryConditionSource;
    private ResolveQueryConditionSourceColumn;
    private ResolveQueryFunctionParameterName;
    private ResolveQueryAggregations;
    private ResolveQueryAggregationsMax;
    private ResolveQueryAggregationsMin;
    private ResolveQueryFunctions;
    private ResolveQueryFunction;
    private ResolveQueryFunctionCoalesce;
    private ResolveQueryConditionMustaches;
    private ResolveQueryConditionMustachesFilter;
    private ResolveQueryConditionMustachesFilterValue;
    private IsValidQueryCondition;
    private IsValidQueryConditionLike;
    private CleanSingleQuote;
    private ResolveQuerySortsMustaches;
    private ResolveQueryOrderBy;
    private IsSwapQueryOrderBy;
    private GetSwapQueryOrderBy;
}
