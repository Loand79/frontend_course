 $folder = Read-Host "folder name"
 New-Item -ItemType Directory -Path ".\$folder", ".\$folder\ui", ".\$folder\model\slices", ".\$folder\model\selectors", ".\$folder\model\services", ".\$folder\model\types"
 New-Item -ItemType File -Path ".\$folder\index.ts"