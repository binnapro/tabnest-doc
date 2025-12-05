---
sidebar_position: 4
title: AI-Powered Tab Categorization
---

# AI Smart Categorization

TabNest features intelligent AI-powered tab categorization that can automatically organize your tabs into meaningful groups. This is perfect for those moments when you have dozens of open tabs and need help bringing order to the chaos.

## How It Works

The AI categorization system uses advanced language models to:
1. Read the title and URL of each tab
2. Understand the content and purpose
3. Suggest logical groupings and names
4. Create organized tab groups automatically

## Supported AI Providers

### 1. Claude (Anthropic)
- **Model**: `claude-sonnet-4-5-20250929`
- **Setup**: Requires Anthropic API key
- **Best for**: High-quality, context-aware categorization
- **Cost**: Pay-per-token

### 2. OpenAI Compatible Services
- **Default**: SiliconFlow GLM-4.5-Air
- **Setup**: Provide API endpoint URL
- **Best for**: Cost-effective, reliable
- **Supports**: Custom endpoints (Local LLMs, Ollama, etc.)

### 3. Alibaba Cloud Bailian
- **Model**: `qwen-plus-latest`
- **Setup**: Requires Bailian API key
- **Best for**: Chinese content
- **Cost**: Pay-per-token

## Setting Up AI Categorization

### Step 1: Get an API Key

**For Claude (Recommended):**
1. Visit [Anthropic Console](https://console.anthropic.com)
2. Sign up for an account
3. Create an API key
4. Copy the key

**For OpenAI-Compatible Services:**
1. Visit [SiliconFlow](https://siliconflow.cn) or use your own service
2. Create an account
3. Get your API key
4. Note the API endpoint URL

### Step 2: Configure in TabNest

1. Click TabNest icon → **Settings** (gear icon)
2. Navigate to **AI Configuration**
3. Click **"+ Add AI Provider"**
4. Fill in:
   - **Provider**: Select from dropdown
   - **API Key**: Paste your key
   - **Model ID**: (auto-filled, can modify)
   - **API URL**: (for OpenAI-compatible only)
5. Click **"Test Connection"** to verify
6. Click **"Save"**

### Step 3: Select Default Provider

1. In Settings → AI Configuration
2. Find your configured provider
3. Click the **radio button** to set as default
4. Multiple providers? No problem—you can switch anytime

## Using AI Categorization

### Basic Usage

1. Save multiple tabs you want to organize
2. Click the **⚡ AI Smart Categorize** button (lightning icon)
3. Click **"Start Categorization"**
4. Watch as the AI:
   - Analyzes your tabs
   - Streams suggestions in real-time
   - Creates tab groups automatically
5. Review the results:
   - Accept the categorization → **"Apply"**
   - Reject and try again → **"Cancel"**

### Real-Time Streaming

The AI responses stream in real-time, so you see results appearing as they're generated. This is especially impressive with complex tab collections.

### Manual Review Before Applying

Before the categorization is finalized, you can:
- **Edit group names** - Click to rename groups
- **Reorganize tabs** - Drag tabs between suggested groups
- **Merge groups** - Combine similar groups
- **Split groups** - Separate large groups

Then click **"Apply"** to finalize.

## Advanced Features

### Categorization Tips

For best results:
- **Use descriptive page titles** - Sites with good titles categorize better
- **Group related tabs** - Don't mix completely different topics
- **Use multiple calls** - If results aren't perfect, refine and try again
- **Provide context** - Add a note about the project if needed

### Custom Prompts

Some providers allow custom categorization prompts:
1. Go to Settings → AI Configuration
2. Find your provider
3. Look for "Custom Prompt" option
4. Edit to specify your preferences:
   - "Group by technology stack"
   - "Group by urgency"
   - "Group by document type"

### Undo/Rollback

If you don't like the categorization:
1. TabNest automatically creates a backup before applying changes
2. Go to Settings → Data Management
3. Click **"Undo Last AI Categorization"**
4. Your previous tab organization is restored

## Privacy & Security

### Data Handling

- **Your data**: Only tab titles and URLs are sent to AI providers
- **Not stored**: TabNest doesn't store categorization history
- **Your control**: You can review and modify results before applying
- **Local first**: All categorization happens after your approval

### API Keys

- **Encrypted**: API keys are encrypted locally
- **Never shared**: Keys are never sent to TabNest servers
- **Full control**: You manage your own API keys and billing

## Cost Considerations

### Pricing Comparison

| Provider | Cost Model | Typical Cost |
|----------|-----------|-------------|
| Claude | $0.003-0.03 per 1K tokens | $0.05-0.15 per categorization |
| SiliconFlow (OpenAI-compatible) | $0.002 per 1K input tokens | $0.01-0.05 per categorization |
| Bailian | Pay-per-call | $0.01-0.05 per call |

### Tips for Cost Control

1. **Batch categorizations** - Do multiple tabs at once
2. **Monitor usage** - Check your provider's dashboard regularly
3. **Use local LLMs** - For advanced users: run local models via Ollama
4. **Test first** - Use a small tab set before large operations

## Troubleshooting

### Connection Failed

- Check your internet connection
- Verify API key is correct
- Ensure API key has proper permissions
- Try a different provider

### Poor Categorization Results

- Ensure tabs have good titles
- Try with fewer tabs (10-20 for best results)
- Adjust the custom prompt if available
- Switch to a different AI model

### Rate Limited

- You've hit your provider's rate limit
- Wait a few minutes before retrying
- Consider upgrading your API plan
- Use a different provider

## Best Practices

1. **Regular maintenance** - Use AI monthly to reorganize growing collections
2. **Manual refinement** - Adjust AI results to your preferences
3. **Keep backups** - Create manual backups before major categorizations
4. **Mix with manual** - Combine AI with manual organization for best results
