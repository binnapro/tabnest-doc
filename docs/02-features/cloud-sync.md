---
sidebar_position: 5
title: Cloud Sync
---

# Cloud Sync - Backup & Restore

Keep your tab collection safe and accessible across devices with cloud synchronization. TabNest supports two popular cloud storage options.

## Sync Methods

### GitHub Gist Sync

**Pros:**
- Free
- Version history maintained
- Backed by trusted GitHub
- Private gists available
- Easy to share if needed

**Cons:**
- Requires GitHub account
- Manual sync (with auto-sync available)
- 1MB file size limit per gist

**Best for:** Developers, version control enthusiasts

### WebDAV Sync

**Pros:**
- Works with multiple services
- Automatic sync available
- No third-party account needed
- Large file support
- Self-hosted options available

**Cons:**
- Requires WebDAV server
- Setup can be technical
- Less version history

**Best for:** Privacy-focused users, enterprise environments

**Supported Services:**
- Jianguo Cloud (坚果云) - Popular in China
- Nextcloud - Open-source solution
- Self-hosted WebDAV servers
- Other WebDAV-compatible services

## Setting Up GitHub Gist Sync

### Step 1: Create GitHub Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click **"Tokens (classic)"**
3. Click **"Generate new token (classic)"**
4. Configure:
   - **Name**: "TabNest Sync"
   - **Expiration**: "No expiration" (or your preference)
   - **Scopes**: Check only **`gist`** permission
5. Click **"Generate token"**
6. **Copy the token** immediately (you won't see it again)

### Step 2: Configure in TabNest

1. Open TabNest → **Settings** (gear icon)
2. Go to **Cloud Sync** section
3. Click **"GitHub Gist"** tab
4. Enter:
   - **GitHub Token**: Paste your token
   - **Gist Name**: (optional) Name for your gist, e.g., "tabnest-backup"
5. Click **"Test Connection"**
6. If successful, click **"Enable GitHub Sync"**

### Step 3: Sync Your Data

**Manual Sync:**
1. Click **"Sync Now"** button
2. Wait for completion
3. Check "Last sync time" to confirm

**Auto-Sync:**
1. Check **"Enable Auto-Sync"**
2. Set sync interval (default: every 5 minutes)
3. TabNest will automatically sync changes in background

## Setting Up WebDAV Sync

### For Jianguo Cloud (坚果云) Users

#### Step 1: Enable WebDAV

1. Log in to [Jianguo Cloud](https://www.jianguoyun.com)
2. Go to Account Settings → Security
3. Find "WebDAV" section
4. Click "Generate App Password"
5. Copy the generated password

#### Step 2: Get Server Address

- Server address: `https://dav.jianguoyun.com/dav/`
- Username: Your JiangUo Cloud email or ID
- Password: The generated password from step 1

#### Step 3: Configure in TabNest

1. Open TabNest → **Settings**
2. Go to **Cloud Sync** → **WebDAV** tab
3. Enter:
   - **Server URL**: `https://dav.jianguoyun.com/dav/`
   - **Username**: Your account email
   - **Password**: Generated password
   - **Path**: `/TabNest/` (or your preference)
4. Click **"Test Connection"**
5. If successful, click **"Enable WebDAV Sync"**

### For Nextcloud Users

1. Get your Nextcloud server address (e.g., `https://cloud.example.com`)
2. Create an app password:
   - Settings → Security → App Passwords
   - Create new app password
3. Use app password in TabNest configuration
4. Server URL: `https://cloud.example.com/remote.php/dav/`
5. Enter your Nextcloud username and app password

## Managing Cloud Sync

### View Sync Status

In Settings → Cloud Sync:
- **Last Sync**: When sync last completed
- **Status**: Success/Failed/In Progress
- **Sync Count**: Total number of syncs performed
- **File Size**: Size of your synced data

### Manual Operations

**Force Sync:**
- Click **"Sync Now"** to sync immediately

**Download Latest:**
- Click **"Restore from Cloud"** to get the latest version

**Upload Current:**
- Click **"Upload Now"** to push your current data

### Disable/Remove Sync

1. Go to Settings → Cloud Sync
2. Click **"Disable [Provider]"**
3. Confirm the action
4. Your local data remains unchanged

## Conflict Resolution

If you edit tabs on multiple devices simultaneously:

1. **Automatic**: TabNest uses timestamp-based resolution
2. **Last-write wins**: The most recent change is kept
3. **Backup**: Previous version is automatically backed up
4. **Manual**: You can restore previous versions (see History)

## Backup & Restore

### Create Backup

1. Go to Settings → Data Management
2. Click **"Export Data"**
3. Choose format: JSON or CSV
4. Save the file locally
5. Keep backups safe

### Restore from Backup

1. Go to Settings → Data Management
2. Click **"Import Data"**
3. Select your backup file
4. Choose merge or replace option
5. Click **"Restore"**

### Restore from Cloud

If you deleted data locally:

1. Go to Settings → Cloud Sync
2. Click **"Download Latest"** or **"Restore from Cloud"**
3. Your cloud data is restored locally

## Privacy & Security

### Data Encryption

- **GitHub Gist**: Encrypted in transit (HTTPS)
- **WebDAV**: Encrypted in transit (HTTPS)
- **At rest**: Depends on your cloud provider

### Best Practices

1. **Protect your tokens/passwords** - Treat like passwords
2. **Use app passwords** - Not your main password
3. **Enable two-factor** - On your cloud provider account
4. **Regular backups** - Keep local JSON backups
5. **Monitor sync** - Check sync status regularly

## Troubleshooting

### Sync Failed

**GitHub Gist:**
- Check token validity
- Verify token has `gist` permission
- Check internet connection
- Try manual sync

**WebDAV:**
- Verify server URL is correct
- Check username and password
- Ensure WebDAV is enabled on server
- Check server connectivity

### Auth Failed

- GitHub: Regenerate token
- WebDAV: Verify credentials with provider

### File Too Large (GitHub)

- GitHub Gist has 1MB limit
- Clear old data or switch to WebDAV
- Export and delete old Spaces

## Advanced Tips

### Multiple Devices

1. Set up sync on Device A
2. Configure same provider on Device B
3. Device B automatically downloads existing data
4. Changes sync bidirectionally

### Version History (GitHub)

1. View your gist on GitHub (link in Settings)
2. Check the "Revisions" tab
3. See full history of your changes
4. Can revert to any previous version manually

### Self-Hosted WebDAV

For advanced users with their own server:
1. Set up WebDAV server
2. Use your server URL in TabNest
3. Same configuration as third-party services
4. Full control over your data
