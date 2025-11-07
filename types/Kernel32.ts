import type { Pointer } from 'bun:ffi';

export type ACCESS_MASK = number;
export type BOOL = number;
export type BOOLEAN = number;
export type BY_HANDLE_FILE_INFORMATION = Pointer | null;
export type BYTE = number;
export type CHAR = number;
export type CONDITION_VARIABLE = Pointer | null;
export type CONSOLE_SCREEN_BUFFER_INFO = Pointer | null;
export type COORD = Pointer | null;
export type CRITICAL_SECTION = Pointer | null;
export type DWORD = number;
export type DWORD_PTR = bigint;
export type DWORDLONG = bigint;
export type LCID = DWORD;
export type FILETIME = Pointer | null;
export type HANDLE = Pointer | null;
export type HGLOBAL = Pointer | null;
export type HINSTANCE = Pointer | null;
export type HLOCAL = Pointer | null;
export type HMODULE = Pointer | null;
export type HPCON = Pointer | null;
export type HWND = Pointer | null;
export type HRSRC = Pointer | null;
export type INT = number;
export type INT_PTR = bigint;
export type LARGE_INTEGER = bigint;
export type LONG = number;
export type LONG_PTR = bigint;
export type LPARAM = LONG_PTR;
export type WPARAM = UINT_PTR;
export type HRESULT = LONG;
export type LPBOOL = Pointer | null;
export type LPBY_HANDLE_FILE_INFORMATION = Pointer | null;
export type LPBYTE = Pointer | null;
export type LPCCH = Pointer | null;
export type LPCONDITION_VARIABLE = Pointer | null;
export type LPCRITICAL_SECTION = Pointer | null;
export type LPCSTR = Pointer | null;
export type LPCTSTR = Pointer | null;
export type LPCVOID = Pointer | null;
export type LPCWCH = Pointer | null;
export type LPCWSTR = Pointer | null;
export type LPNLSVERSIONINFO = Pointer | null;
export type LPCURRENCYFMTA = Pointer | null;
export type LPCURRENCYFMTW = Pointer | null;
export type LPCPINFO = Pointer | null;
export type LPCPINFOEXA = Pointer | null;
export type LPCPINFOEXW = Pointer | null;
export type LPDWORD = Pointer | null;
export type LPFILETIME = Pointer | null;
export type LPHANDLE = Pointer | null;
export type LPLONG = Pointer | null;
export type LPLPOVERLAPPED = Pointer | null;
export type LPMODULEENTRY32W = Pointer | null;
export type LPOVERLAPPED = Pointer | null;
export type LPOVERLAPPED_COMPLETION_ROUTINE = Pointer | null;
export type LPOVERLAPPED_ENTRY = Pointer | null;
export type LPPROCESS_INFORMATION = Pointer | null;
export type LPPROCESSENTRY32W = Pointer | null;
export type LPPROGRESS_ROUTINE = Pointer | null;
export type LPPROC_THREAD_ATTRIBUTE_LIST = Pointer | null;
export type LPSECURITY_ATTRIBUTES = Pointer | null;
export type LPSRWLOCK = Pointer | null;
export type LPSTARTUPINFOA = Pointer | null;
export type LPSTARTUPINFOW = Pointer | null;
export type LPSTR = Pointer | null;
export type LPSYSTEMTIME = Pointer | null;
export type LPTHREAD_START_ROUTINE = Pointer | null;
export type LPTHREADENTRY32 = Pointer | null;
export type LPTHREADENTRY32W = Pointer | null;
export type LPTIMERAPCROUTINE = Pointer | null;
export type LPTOOLHELP32_SNAPSHOT = Pointer | null;
export type LPTP_CALLBACK_ENVIRON = Pointer | null;
export type LPTP_POOL = Pointer | null;
export type LPTP_TIMER = Pointer | null;
export type LPTP_TIMER_CALLBACK = Pointer | null;
export type LPTP_WAIT = Pointer | null;
export type LPTP_WORK = Pointer | null;
export type LPTSTR = Pointer | null;
export type LPVOID = Pointer | null;
export type LPWIN32_FIND_DATAW = Pointer | null;
export type LPWSTR = Pointer | null;
export type LRESULT = LONG_PTR;
export type MODULEENTRY32W = Pointer | null;
export type PBOOL = Pointer | null;
export type PBYTE = Pointer | null;
export type PCONDITION_VARIABLE = Pointer | null;
export type PCONSOLE_READCONSOLE_CONTROL = Pointer | null;
export type PCONSOLE_SCREEN_BUFFER_INFO = Pointer | null;
export type PCONSOLE_SCREEN_BUFFER_INFOEX = Pointer | null;
export type PCONSOLE_CURSOR_INFO = Pointer | null;
export type PCONSOLE_FONT_INFO = Pointer | null;
export type PCONSOLE_FONT_INFOEX = Pointer | null;
export type PCONSOLE_HISTORY_INFO = Pointer | null;
export type PCONSOLE_SELECTION_INFO = Pointer | null;
export type PCRITICAL_SECTION = Pointer | null;
export type PDWORD = Pointer | null;
export type PDWORD_PTR = Pointer | null;
export type PFILETIME = Pointer | null;
export type PHANDLE = Pointer | null;
export type PHANDLER_ROUTINE = Pointer | null;
export type PLARGE_INTEGER = Pointer | null;
export type PLONG = Pointer | null;
export type PMEMORY_BASIC_INFORMATION = Pointer | null;
export type PMODULEENTRY32W = Pointer | null;
export type PPROCESSENTRY32W = Pointer | null;
export type PSECURITY_ATTRIBUTES = Pointer | null;
export type PSRWLOCK = Pointer | null;
export type PSYSTEM_INFO = Pointer | null;
export type PTIMERAPCROUTINE = Pointer | null;
export type PULARGE_INTEGER = Pointer | null;
export type PULONG = Pointer | null;
export type PULONG_PTR = Pointer | null;
export type PULONGLONG = Pointer | null;
export type PHPCON = Pointer | null;
export type PUSHORT = Pointer | null;
export type PVOID = Pointer | null;
export type PWSTR = Pointer | null;
export type SHORT = number;
export type SIZE_T = bigint;
export type UINT = number;
export type UINT_PTR = bigint;
export type ULARGE_INTEGER = bigint;
export type ULONG = number;
export type ULONG_PTR = bigint;
export type ULONGLONG = bigint;
export type USHORT = number;
export type VOID = void;
export type WAITORTIMERCALLBACK = Pointer | null;
export type WCHAR = number;
// Locale/codepage enumeration callbacks
export type CODEPAGE_ENUMPROC = Pointer | null;
export type LOCALE_ENUMPROCA = Pointer | null;
export type LOCALE_ENUMPROCW = Pointer | null;
export type LOCALE_ENUMPROCEX = Pointer | null;
export type GEO_ENUMPROC = Pointer | null;
export type GEO_ENUMNAMEPROC = Pointer | null;
export type LANGUAGEGROUP_ENUMPROCA = Pointer | null;
export type LANGUAGEGROUP_ENUMPROCW = Pointer | null;
export type TIMEFMT_ENUMPROCA = Pointer | null;
export type TIMEFMT_ENUMPROCW = Pointer | null;
export type TIMEFMT_ENUMPROCEX = Pointer | null;
export type UILANGUAGE_ENUMPROCA = Pointer | null;
export type UILANGUAGE_ENUMPROCW = Pointer | null;

// Callback typedefs used by EnumResource* APIs
export type ENUMRESLANGPROCA = Pointer | null;
export type ENUMRESLANGPROCW = Pointer | null;
export type ENUMRESNAMEPROCA = Pointer | null;
export type ENUMRESNAMEPROCW = Pointer | null;
export type ENUMRESTYPEPROCA = Pointer | null;
export type ENUMRESTYPEPROCW = Pointer | null;

export const INVALID_HANDLE_VALUE = -1 as HANDLE;
export const INFINITE = 0xffffffff as DWORD;

export const STD_HANDLE = {
  ERROR: -12 as DWORD,
  INPUT: -10 as DWORD,
  OUTPUT: -11 as DWORD,
} as const;

export enum ConsoleMode {
  DISABLE_NEWLINE_AUTO_RETURN = 0x0000_0008,
  ENABLE_ECHO_INPUT = 0x0000_0004,
  ENABLE_EXTENDED_FLAGS = 0x0000_0080,
  ENABLE_INSERT_MODE = 0x0000_0020,
  ENABLE_LINE_INPUT = 0x0000_0002,
  ENABLE_LVB_GRID_WORLDWIDE = 0x0000_0010,
  ENABLE_MOUSE_INPUT = 0x0000_0010,
  ENABLE_PROCESSED_INPUT = 0x0000_0001,
  ENABLE_PROCESSED_OUTPUT = 0x0000_0001,
  ENABLE_QUICK_EDIT_MODE = 0x0000_0040,
  ENABLE_VIRTUAL_TERMINAL_INPUT = 0x0000_0200,
  ENABLE_VIRTUAL_TERMINAL_PROCESSING = 0x0000_0004,
  ENABLE_WINDOW_INPUT = 0x0000_0008,
  ENABLE_WRAP_AT_EOL_OUTPUT = 0x0000_0002,
}

export enum CopyFileFlags {
  COPY_FILE_ALLOW_DECRYPTED_DESTINATION = 0x0000_0008,
  COPY_FILE_COPY_SYMLINK = 0x0000_0800,
  COPY_FILE_FAIL_IF_EXISTS = 0x0000_0001,
  COPY_FILE_NO_BUFFERING = 0x0000_1000,
  COPY_FILE_OPEN_SOURCE_FOR_WRITE = 0x0000_0004,
  COPY_FILE_RESTARTABLE = 0x0000_0002,
}

export enum DuplicateHandleOptions {
  DUPLICATE_CLOSE_SOURCE = 0x0000_0001,
  DUPLICATE_SAME_ACCESS = 0x0000_0002,
}

export enum FileAccess {
  GENERIC_ALL = 0x1000_0000,
  GENERIC_EXECUTE = 0x2000_0000,
  GENERIC_READ = 0x8000_0000,
  GENERIC_WRITE = 0x4000_0000,
}

export enum FileMapAccess {
  FILE_MAP_ALL_ACCESS = 0x000f_001f,
  FILE_MAP_COPY = 0x0000_0001,
  FILE_MAP_EXECUTE = 0x0000_0020,
  FILE_MAP_READ = 0x0000_0004,
  FILE_MAP_WRITE = 0x0000_0002,
}

export enum FileShareMode {
  FILE_SHARE_DELETE = 0x0000_0004,
  FILE_SHARE_READ = 0x0000_0001,
  FILE_SHARE_WRITE = 0x0000_0002,
}

export enum FileCreationDisposition {
  CREATE_ALWAYS = 2,
  CREATE_NEW = 1,
  OPEN_ALWAYS = 4,
  OPEN_EXISTING = 3,
  TRUNCATE_EXISTING = 5,
}

export enum FileAttributes {
  FILE_ATTRIBUTE_ARCHIVE = 0x0000_0020,
  FILE_ATTRIBUTE_COMPRESSED = 0x0000_0800,
  FILE_ATTRIBUTE_DIRECTORY = 0x0000_0010,
  FILE_ATTRIBUTE_ENCRYPTED = 0x0000_4000,
  FILE_ATTRIBUTE_HIDDEN = 0x0000_0002,
  FILE_ATTRIBUTE_NORMAL = 0x0000_0080,
  FILE_ATTRIBUTE_NOT_CONTENT_INDEXED = 0x0000_2000,
  FILE_ATTRIBUTE_OFFLINE = 0x0000_1000,
  FILE_ATTRIBUTE_READONLY = 0x0000_0001,
  FILE_ATTRIBUTE_REPARSE_POINT = 0x0000_0400,
  FILE_ATTRIBUTE_SPARSE_FILE = 0x0000_0200,
  FILE_ATTRIBUTE_SYSTEM = 0x0000_0004,
  FILE_ATTRIBUTE_TEMPORARY = 0x0000_0100,
}

export enum FileFlags {
  FILE_FLAG_BACKUP_SEMANTICS = 0x0200_0000,
  FILE_FLAG_DELETE_ON_CLOSE = 0x0400_0000,
  FILE_FLAG_NO_BUFFERING = 0x2000_0000,
  FILE_FLAG_OPEN_NO_RECALL = 0x0010_0000,
  FILE_FLAG_OPEN_REPARSE_POINT = 0x0020_0000,
  FILE_FLAG_OVERLAPPED = 0x4000_0000,
  FILE_FLAG_POSIX_SEMANTICS = 0x0100_0000,
  FILE_FLAG_RANDOM_ACCESS = 0x1000_0000,
  FILE_FLAG_SEQUENTIAL_SCAN = 0x0800_0000,
  FILE_FLAG_WRITE_THROUGH = 0x8000_0000,
}

export enum FilePointerMoveMethod {
  FILE_BEGIN = 0,
  FILE_CURRENT = 1,
  FILE_END = 2,
}

export enum FormatMessageFlags {
  FORMAT_MESSAGE_ALLOCATE_BUFFER = 0x0000_0100,
  FORMAT_MESSAGE_ARGUMENT_ARRAY = 0x0000_2000,
  FORMAT_MESSAGE_FROM_HMODULE = 0x0000_0800,
  FORMAT_MESSAGE_FROM_STRING = 0x0000_0400,
  FORMAT_MESSAGE_FROM_SYSTEM = 0x0000_1000,
  FORMAT_MESSAGE_IGNORE_INSERTS = 0x0000_0200,
  FORMAT_MESSAGE_MAX_WIDTH_MASK = 0x0000_00ff,
}

export enum GetModuleHandleExFlags {
  GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS = 0x0000_0004,
  GET_MODULE_HANDLE_EX_FLAG_PIN = 0x0000_0001,
  GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT = 0x0000_0002,
}

export enum HeapAllocFlags {
  HEAP_GENERATE_EXCEPTIONS = 0x0000_0004,
  HEAP_NO_SERIALIZE = 0x0000_0001,
  HEAP_ZERO_MEMORY = 0x0000_0008,
}

export enum HeapCreateFlags {
  HEAP_CREATE_ENABLE_EXECUTE = 0x0004_0000,
  HEAP_GENERATE_EXCEPTIONS = 0x0000_0004,
  HEAP_NO_SERIALIZE = 0x0000_0001,
}

export enum LoadLibraryFlags {
  DONT_RESOLVE_DLL_REFERENCES = 0x0000_0001,
  LOAD_IGNORE_CODE_AUTHZ_LEVEL = 0x0000_0010,
  LOAD_LIBRARY_AS_DATAFILE = 0x0000_0002,
  LOAD_LIBRARY_AS_DATAFILE_EXCLUSIVE = 0x0000_0040,
  LOAD_LIBRARY_AS_IMAGE_RESOURCE = 0x0000_0020,
  LOAD_LIBRARY_SEARCH_APPLICATION_DIR = 0x0000_0200,
  LOAD_LIBRARY_SEARCH_DEFAULT_DIRS = 0x0000_1000,
  LOAD_LIBRARY_SEARCH_DLL_LOAD_DIR = 0x0000_0100,
  LOAD_LIBRARY_SEARCH_SYSTEM32 = 0x0000_0800,
  LOAD_LIBRARY_SEARCH_USER_DIRS = 0x0000_0400,
  LOAD_WITH_ALTERED_SEARCH_PATH = 0x0000_0008,
}

export enum MemoryAllocationType {
  MEM_COMMIT = 0x0000_1000,
  MEM_DECOMMIT = 0x0000_4000,
  MEM_LARGE_PAGES = 0x2000_0000,
  MEM_PHYSICAL = 0x0040_0000,
  MEM_RELEASE = 0x0000_8000,
  MEM_RESERVE = 0x0000_2000,
  MEM_RESET = 0x0008_0000,
  MEM_RESET_UNDO = 0x0100_0000,
  MEM_TOP_DOWN = 0x0010_0000,
  MEM_WRITE_WATCH = 0x0020_0000,
}

export enum MemoryProtection {
  PAGE_EXECUTE = 0x10,
  PAGE_EXECUTE_READ = 0x20,
  PAGE_EXECUTE_READWRITE = 0x40,
  PAGE_EXECUTE_WRITECOPY = 0x80,
  PAGE_GUARD = 0x100,
  PAGE_NOACCESS = 0x01,
  PAGE_NOCACHE = 0x200,
  PAGE_READONLY = 0x02,
  PAGE_READWRITE = 0x04,
  PAGE_WRITECOMBINE = 0x400,
  PAGE_WRITECOPY = 0x08,
}

export enum MoveFileFlags {
  MOVEFILE_COPY_ALLOWED = 0x0000_0002,
  MOVEFILE_CREATE_HARDLINK = 0x0000_0010,
  MOVEFILE_DELAY_UNTIL_REBOOT = 0x0000_0004,
  MOVEFILE_FAIL_IF_NOT_TRACKABLE = 0x0000_0020,
  MOVEFILE_REPLACE_EXISTING = 0x0000_0001,
  MOVEFILE_WRITE_THROUGH = 0x0000_0008,
}

export enum PipeAccessFlags {
  PIPE_ACCESS_DUPLEX = 0x0000_0003,
  PIPE_ACCESS_INBOUND = 0x0000_0001,
  PIPE_ACCESS_OUTBOUND = 0x0000_0002,
}

export enum PipeMode {
  PIPE_NOWAIT = 0x0000_0001,
  PIPE_READMODE_BYTE = 0x0000_0000,
  PIPE_READMODE_MESSAGE = 0x0000_0002,
  PIPE_REJECT_REMOTE_CLIENTS = 0x0000_0008,
  PIPE_TYPE_BYTE = 0x0000_0000,
  PIPE_TYPE_MESSAGE = 0x0000_0004,
  PIPE_WAIT = 0x0000_0000,
}

export enum ProcessAccessRights {
  PROCESS_ALL_ACCESS = 0x001f_0fff,
  PROCESS_CREATE_PROCESS = 0x0000_0080,
  PROCESS_CREATE_THREAD = 0x0000_0002,
  PROCESS_DUP_HANDLE = 0x0000_0040,
  PROCESS_QUERY_INFORMATION = 0x0000_0400,
  PROCESS_QUERY_LIMITED_INFORMATION = 0x0000_1000,
  PROCESS_SET_INFORMATION = 0x0000_0200,
  PROCESS_SET_QUOTA = 0x0000_0100,
  PROCESS_SUSPEND_RESUME = 0x0000_0800,
  PROCESS_TERMINATE = 0x0000_0001,
  PROCESS_VM_OPERATION = 0x0000_0008,
  PROCESS_VM_READ = 0x0000_0010,
  PROCESS_VM_WRITE = 0x0000_0020,
}

export enum ProcessCreationFlags {
  CREATE_DEFAULT_ERROR_MODE = 0x0400_0000,
  CREATE_NEW_CONSOLE = 0x0000_0010,
  CREATE_NEW_PROCESS_GROUP = 0x0000_0200,
  CREATE_NO_WINDOW = 0x0800_0000,
  CREATE_SUSPENDED = 0x0000_0004,
  CREATE_UNICODE_ENVIRONMENT = 0x0000_0400,
  DEBUG_ONLY_THIS_PROCESS = 0x0000_0002,
  DEBUG_PROCESS = 0x0000_0001,
  DETACHED_PROCESS = 0x0000_0008,
}

export enum SectionAttributes {
  SEC_COMMIT = 0x0800_0000,
  SEC_IMAGE = 0x0100_0000,
  SEC_LARGE_PAGES = 0x8000_0000,
  SEC_NOCACHE = 0x1000_0000,
  SEC_RESERVE = 0x0400_0000,
  SEC_WRITECOMBINE = 0x4000_0000,
}

export enum StartupInfoFlags {
  STARTF_FORCEOFFFEEDBACK = 0x0000_0080,
  STARTF_FORCEONFEEDBACK = 0x0000_0040,
  STARTF_RUNFULLSCREEN = 0x0000_0020,
  STARTF_USECOUNTCHARS = 0x0000_0008,
  STARTF_USEFILLATTRIBUTE = 0x0000_0010,
  STARTF_USEHOTKEY = 0x0000_0200,
  STARTF_USEPOSITION = 0x0000_0004,
  STARTF_USESHOWWINDOW = 0x0000_0001,
  STARTF_USESIZE = 0x0000_0002,
  STARTF_USESTDHANDLES = 0x0000_0100,
}

export enum SystemErrorMode {
  SEM_FAILCRITICALERRORS = 0x0000_0001,
  SEM_NOALIGNMENTFAULTEXCEPT = 0x0000_0004,
  SEM_NOGPFAULTERRORBOX = 0x0000_0002,
  SEM_NOOPENFILEERRORBOX = 0x0000_8000,
}

export enum ToolhelpSnapshotFlags {
  TH32CS_INHERIT = 0x8000_0000,
  TH32CS_SNAPALL = 0x0000_000f,
  TH32CS_SNAPHEAPLIST = 0x0000_0001,
  TH32CS_SNAPMODULE = 0x0000_0008,
  TH32CS_SNAPMODULE32 = 0x0000_0010,
  TH32CS_SNAPPROCESS = 0x0000_0002,
  TH32CS_SNAPTHREAD = 0x0000_0004,
}

export enum ThreadAccessRights {
  THREAD_ALL_ACCESS = 0x001f_03ff,
  THREAD_DIRECT_IMPERSONATION = 0x0000_0200,
  THREAD_GET_CONTEXT = 0x0000_0008,
  THREAD_IMPERSONATE = 0x0000_0100,
  THREAD_QUERY_INFORMATION = 0x0000_0040,
  THREAD_QUERY_LIMITED_INFORMATION = 0x0000_0800,
  THREAD_SET_CONTEXT = 0x0000_0010,
  THREAD_SET_INFORMATION = 0x0000_0020,
  THREAD_SET_LIMITED_INFORMATION = 0x0000_0400,
  THREAD_SET_THREAD_TOKEN = 0x0000_0080,
  THREAD_SUSPEND_RESUME = 0x0000_0002,
  THREAD_TERMINATE = 0x0000_0001,
}

export enum FindExInfoLevels {
  FindExInfoBasic = 0,
  FindExInfoMaxInfoLevel = 2,
  FindExInfoStandard = 1,
}

export enum FindExSearchOp {
  FindExSearchLimitToDevices = 2,
  FindExSearchLimitToDirectories = 1,
  FindExSearchNameMatch = 0,
}

export enum FileNotifyChangeFlags {
  FILE_NOTIFY_CHANGE_ATTRIBUTES = 0x0000_0004,
  FILE_NOTIFY_CHANGE_CREATION = 0x0000_0040,
  FILE_NOTIFY_CHANGE_DIR_NAME = 0x0000_0002,
  FILE_NOTIFY_CHANGE_FILE_NAME = 0x0000_0001,
  FILE_NOTIFY_CHANGE_LAST_ACCESS = 0x0000_0020,
  FILE_NOTIFY_CHANGE_LAST_WRITE = 0x0000_0010,
  FILE_NOTIFY_CHANGE_SECURITY = 0x0000_0100,
  FILE_NOTIFY_CHANGE_SIZE = 0x0000_0008,
}

export enum WaitResult {
  WAIT_ABANDONED = 0x0000_0080,
  WAIT_FAILED = 0xffff_ffff,
  WAIT_OBJECT_0 = 0x0000_0000,
  WAIT_TIMEOUT = 0x0000_0102,
}
