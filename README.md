# Secure Cloud Resume — AWS

## Live Site
[View Resume](https://d3grhzb6w74fcq.cloudfront.net)

## Architecture

User → CloudFront (HTTPS) → S3 (private)
↓
Lambda Function URL
↓
DynamoDB (visitor counter)

## Services Used
| Service | Purpose |
|---|---|
| S3 | Static website hosting (private, zero public access) |
| CloudFront | CDN + HTTPS enforcement |
| Lambda | Serverless visitor counter backend |
| DynamoDB | Visitor count persistence |
| IAM | Least privilege roles per service |
| WAF | Core Rule Set + Known Bad Inputs protection |
| CloudTrail | Full API audit logging |

## Security Highlights
- S3 has zero public access — CloudFront is the only entry point
- IAM roles scoped to minimum required permissions
- WAF managed rules blocking SQLi, XSS, and known bad inputs
- HTTPS enforced — HTTP redirects to HTTPS
- CloudTrail logging all management events

## What I Built
- Hosted static resume on private S3 bucket behind CloudFront
- Configured Origin Access Control — no direct S3 URL access possible
- Built serverless visitor counter using Lambda + DynamoDB with no API Gateway
- Debugged and resolved CORS issue between CloudFront and Lambda Function URL
- Applied WAF managed rule groups to CloudFront distribution
- Enabled CloudTrail for full account audit logging

## Screenshots
### CloudFront Distribution
![CloudFront](Screenshots/CloudFront%20distribution%20%E2%80%94%20Enabled%20status%20%2B%20URL.png)

### Lambda Function
![Lambda](Screenshots/Lambda%20function%20%E2%80%94%20code%20visible.png)

### DynamoDB Table
![DynamoDB](Screenshots/DynamoDB%20table%20%E2%80%94%20items%20showing%20the%20count.png)

### S3 Bucket
![S3](Screenshots/S3%20bucket%20with%20files%20%2B%20block%20public%20access%20enabled.png)
