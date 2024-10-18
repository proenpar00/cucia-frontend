# Usa una imagen base de Python
FROM mcr.microsoft.com/vscode/devcontainers/python:3.9

# Instala dependencias adicionales, si es necesario
# RUN apt-get update && apt-get install -y <paquetes>

# Establece el directorio de trabajo
WORKDIR /workspace

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Ejecuta cualquier comando de instalación necesario
# Si usas un archivo requirements.txt, esto se puede hacer en el postCreateCommand
# RUN pip install -r requirements.txt
