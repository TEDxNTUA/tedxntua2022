'''
Setup script

Usage: pip install .

For development purposes, run: pip install -e .[dev]
'''
from setuptools import setup, find_packages
from _version import __version__

setup(
    name='tedxntua2022',
    version=__version__,
    packages=find_packages(),
    scripts=['manage.py'],
    url='2022',
    author='TEDxNTUA IT Team 2022',
    author_email='webmaster@tedxntua.com',
    install_requires=[
        'dj-database-url',
        'Django',
        'mysqlclient',
        'django-versatileimagefield',
        'django-webpack-loader',
        'django-parler',
        'django-extensions',
        'django-active-link',
    ],
    extras_require={
        'dev': [
            'fabric',
            'colorama',
            'decorator',
        ],
    },
    entry_points={
        'console_scripts': [
            'fub = fub.main:program.run',
        ],
    },
)
