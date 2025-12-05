---
sidebar_position: 4
title: Troubleshooting
---

# Troubleshooting Guide

Solutions to common TabNest issues.

## Extension Not Showing

### Check Installation

1. Open `chrome://extensions`
2. Search for "TabNest"
3. Ensure it's enabled (toggle should be on)
4. Refresh the page

### Pin to Toolbar

1. Click extension icon in toolbar
2. Click pin icon
3. TabNest should now be visible

## Tabs Not Saving

### Check Permissions

1. `chrome://extensions` → TabNest → Details
2. Scroll to "Permissions"
3. Ensure necessary permissions are granted
4. Re-grant if needed

### Try Hard Refresh

1. Close TabNest completely
2. Close all browser windows
3. Restart browser
4. Try saving again

## Sync Not Working

### GitHub Gist

- Verify token validity
- Token may have expired
- Regenerate and update Settings
- Check internet connection

### WebDAV

- Verify server address is correct
- Check username and password
- Ensure WebDAV is enabled on server
- Test connection in Settings

## Data Lost

### Recovery Steps

1. Check Cloud Sync → Download latest
2. Import from local backup file
3. Check browser's local storage
4. Contact support with details

## Performance Issues

### Slow to Load

- Disable auto-sync temporarily
- Reduce number of open Spaces
- Clear browser cache
- Try different browser

### Crashing

- Clear extension cache
- Disable and re-enable extension
- Reinstall extension
- Check browser version is up-to-date

## AI Categorization Issues

### No Response

- Check API key validity
- Verify internet connection
- Try different AI provider
- Check API quota/billing

### Poor Results

- Ensure tabs have good titles
- Try fewer tabs (10-20)
- Refine custom prompt
- Switch to different model

## Data Privacy

### Can I Trust TabNest?

- Open source codebase available
- No tracking or analytics
- All data stored locally by default
- Cloud sync is encrypted
- Read privacy policy for details

## Contact Support

For issues not listed:
- Visit GitHub Issues
- Search for similar issues
- Provide detailed description
- Include browser version and extension version
