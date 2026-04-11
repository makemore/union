# Union - Dockerfile for Google Cloud Run
#
# Build:
#   docker build -t union .
#
# Run locally:
#   docker run -p 8080:8080 -e DJANGO_SETTINGS_MODULE=union.settings.dev union

FROM python:3.11-slim

# Install uv for faster dependency installation
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=8080

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies (uv is much faster than pip)
COPY requirements.txt .
RUN uv pip install --system --no-cache -r requirements.txt

# Copy project files
COPY . .

# Collect static files (for WhiteNoise)
RUN python manage.py collectstatic --noinput --settings=union.settings.base || true

# Create non-root user for security
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8080

# Run gunicorn
CMD exec gunicorn --bind :$PORT --workers 2 --threads 4 --timeout 60 union.wsgi:application
