# Generated by Django 4.1.7 on 2023-08-20 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='handel_form',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=400)),
                ('last_name', models.CharField(max_length=400)),
                ('email', models.EmailField(max_length=254)),
                ('passwprd', models.CharField(max_length=400)),
            ],
        ),
    ]
