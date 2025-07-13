'use client';

import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CategoryFilterProps {
  tags: string[];
  onChangeAction: (tag: string) => void;
  selectedTag: string;
}

export function CategoryFilter({ tags, onChangeAction, selectedTag }: CategoryFilterProps) {
  return (
    <Select value={selectedTag} onValueChange={onChangeAction}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Tags</SelectItem>
        {tags.map(tag => (
          <SelectItem key={tag} value={tag}>
            {tag}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}