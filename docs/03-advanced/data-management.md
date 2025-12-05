---
sidebar_position: 2
title: Data Management & Import/Export
---

# Data Management & Import/Export

Learn how to backup, restore, import, and export your TabNest data.

## Exporting Your Data

### Export to JSON

1. Open TabNest → Settings
2. Go to **Data Management** section
3. Click **"Export Data"**
4. Select **JSON** format
5. Choose save location
6. File will contain all your Spaces, Groups, and Tabs

### Export to CSV

1. Follow steps 1-4 above
2. Select **CSV** format
3. Each tab becomes one row
4. Useful for data analysis or importing elsewhere

### What Gets Exported

- ✅ All Spaces and their settings
- ✅ All Tab Groups with colors/icons
- ✅ All saved tabs (URLs, titles, timestamps)
- ✅ Settings and preferences
- ❌ Cloud sync credentials (for security)

## Importing Data

### From Backup File

1. Open TabNest → Settings
2. Go to **Data Management**
3. Click **"Import Data"**
4. Select your JSON or CSV file
5. Choose import mode:
   - **Merge** - Add to existing data
   - **Replace** - Overwrite all data
6. Click **"Import"**

### From Other Tab Managers

If exporting from another extension:
1. Export from that extension
2. Convert to JSON if needed
3. Import to TabNest

## Backup Strategies

### Manual Backups

- **Frequency**: Monthly recommended
- **Storage**: Keep in secure cloud (Google Drive, Dropbox)
- **Multiple copies**: Keep 2-3 recent backups
- **Testing**: Periodically test restoring to verify integrity

### Automatic Backups

- Enable cloud sync (GitHub Gist or WebDAV)
- TabNest creates automatic backups
- Accessible from Settings → Cloud Sync

### Emergency Recovery

If disaster strikes:
1. Check Settings → Cloud Sync for cloud version
2. Download latest backup
3. Import to TabNest
4. Verify all data is recovered

## Storage Usage

### Check Storage

1. Open TabNest Settings
2. Look at **Storage Usage** indicator
3. Shows:
   - Total tabs stored
   - Approximate storage used
   - Breakdown by Space

### Optimize Storage

- Delete unused Spaces and Groups
- Remove duplicate tabs
- Archive old projects to separate Space
- Keep only actively-used tabs

### Storage Limits

- **Local**: Limited by browser cache (typically 50MB+)
- **GitHub Gist**: 1MB per gist
- **WebDAV**: Depends on your provider

## Data Privacy

### What's Stored Locally

- Your Spaces, Groups, Tabs
- Settings and preferences
- Cloud sync credentials (encrypted)
- Cache and temporary data

### What's Sent to Cloud

If you enable cloud sync:
- All your Spaces, Groups, Tabs
- NOT your API keys for AI (stored locally only)
- NOT your passwords (just URLs and titles)

### What's Never Sent

- Your browsing history
- Your passwords
- Your personal information
- Your AI API keys

## Advanced: Database Repair

If data seems corrupted:

1. Open Settings → Data Management
2. Click **"Repair Database"**
3. TabNest will:
   - Scan for corrupted entries
   - Remove invalid data
   - Rebuild indexes
   - Create automatic backup first

4. If still having issues:
   - Export data
   - Clear all data
   - Import from backup
   - Restart TabNest
