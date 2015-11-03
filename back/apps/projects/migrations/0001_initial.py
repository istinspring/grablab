# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.contrib.postgres.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('tags', django.contrib.postgres.fields.ArrayField(size=None, base_field=models.CharField(max_length=30), blank=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ProjectTranslation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(unique=True, max_length=255)),
                ('summary', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('language_code', models.CharField(max_length=15, db_index=True)),
                ('master', models.ForeignKey(related_name='translations', editable=False, to='projects.Project', null=True)),
            ],
            options={
                'managed': True,
                'abstract': False,
                'db_table': 'projects_project_translation',
                'db_tablespace': '',
            },
        ),
        migrations.AlterUniqueTogether(
            name='projecttranslation',
            unique_together=set([('language_code', 'master')]),
        ),
    ]
