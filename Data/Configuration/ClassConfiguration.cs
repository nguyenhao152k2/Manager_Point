﻿using Manager_Point.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Manager_Point.Configuration
{
    public partial class ClassConfiguration : IEntityTypeConfiguration<Class>
    {
        public void Configure(EntityTypeBuilder<Class> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Id).ValueGeneratedOnAdd();
            builder.HasIndex(t => t.Id).IsUnique();
            //Grade Id
            builder.Property(t => t.CourseId);
            builder.HasIndex(t => t.CourseId);
            //Class Code
            builder.Property(t => t.ClassCode).IsRequired().IsUnicode(false).HasMaxLength(10);
            builder.HasIndex(t => t.ClassCode).IsUnique();
            //Property
            builder.Property(t => t.Name).HasMaxLength(100);
            builder.HasIndex(t => t.Name);
            builder.Property(t => t.GradeLevel);
            builder.HasIndex(t => t.GradeLevel);
            builder.Property(t => t.Years);
            builder.HasIndex(t => t.Years);

            //Set Relationship
            builder.HasOne<Course>(t => t.Course).WithMany(t => t.Classes).HasForeignKey(t => t.CourseId);
        }
    }
}
