# Generated by Django 3.2 on 2022-05-12 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0013_auto_20220512_1217'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='link',
            field=models.URLField(blank=True, verbose_name='link'),
        ),
    ]
