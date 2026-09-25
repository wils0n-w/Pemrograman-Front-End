import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type DashboardMenu = {
  id: number;
  label: string;
  title: string;
  description: string;
  metric: string;
  accent: string;
};

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeMenus: number[] = [];
  isSubmenuOpen = false;

  menus: DashboardMenu[] = [
    {
      id: 1,
      label: 'Menu 1',
      title: 'Overview',
      description: 'Ringkasan singkat mengenai aktivitas dashboard hari ini.',
      metric: '84%',
      accent: 'coral'
    },
    {
      id: 2,
      label: 'Menu 2',
      title: 'Analytics',
      description: 'Pantau perkembangan data dan temukan pola penting.',
      metric: '+28%',
      accent: 'blue'
    },
    {
      id: 3,
      label: 'Menu 3',
      title: 'Projects',
      description: 'Kelola daftar pekerjaan dan progres proyek berjalan.',
      metric: '12',
      accent: 'yellow'
    },
    {
      id: 4,
      label: 'Menu 4',
      title: 'Menu 4',
      description: '',
      metric: '',
      accent: 'green'
    }
  ];

  subMenus: DashboardMenu[] = [
    {
      id: 41,
      label: 'Sub Menu 4A',
      title: 'Profile settings',
      description: 'Atur informasi profil dan preferensi akun kamu.',
      metric: 'A',
      accent: 'green'
    },
    {
      id: 42,
      label: 'Sub Menu 4B',
      title: 'System settings',
      description: 'Kelola konfigurasi dan pengaturan sistem dashboard.',
      metric: 'B',
      accent: 'green'
    }
  ];

  toggleMenu(menuId: number): void {
    if (this.activeMenus.includes(menuId)) {
      this.activeMenus = this.activeMenus.filter(id => id !== menuId);
      return;
    }

    if (this.activeMenus.length < 4) {
      this.activeMenus = [...this.activeMenus, menuId];
    }
  }

  toggleSubmenu(): void {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  selectSubmenu(subMenuId: number): void {
    const selectedSubmenu = this.activeMenus.includes(subMenuId);
    const menusWithoutSubmenu = this.activeMenus.filter(id => id < 41);

    if (selectedSubmenu) {
      this.activeMenus = menusWithoutSubmenu;
      return;
    }

    if (menusWithoutSubmenu.length < 4 || this.activeMenus.some(id => id >= 41)) {
      this.activeMenus = [...menusWithoutSubmenu, subMenuId];
    }
  }

  isSubmenuActive(): boolean {
    return this.activeMenus.some(id => id >= 41);
  }

  removeComponent(menuId: number): void {
    this.activeMenus = this.activeMenus.filter(id => id !== menuId);
  }

  isActive(menuId: number): boolean {
    return this.activeMenus.includes(menuId);
  }

  getMenu(menuId: number): DashboardMenu {
    return [...this.menus, ...this.subMenus].find(menu => menu.id === menuId)!;
  }
}
