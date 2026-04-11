# Union

Django project with:

- Django REST Framework
- Django Allauth (email-only auth)
- dj-rest-auth (API endpoints)
- django-authtools (custom User model)
- S3 storage (Backblaze B2)
- django-cloud-tasks (GCP Cloud Tasks queue)

## Quick Start

This project uses [uv](https://github.com/astral-sh/uv) for fast dependency management.

```bash
# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies (uv is much faster than pip)
uv pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

