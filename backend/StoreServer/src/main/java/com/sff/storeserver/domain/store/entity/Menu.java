package com.sff.storeserver.domain.store.entity;

import com.sff.storeserver.domain.store.dto.MenuInfo;
import com.sff.storeserver.domain.store.dto.OptionInfo;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder(toBuilder = true)
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MENU_ID")
    private Long id;

    @OneToMany(mappedBy = "menu", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Options> options;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "STORE_ID")
    private Store store;

    private String name;
    private int price;
    private String menuUrl;

    public void addOptions(List<Options> options) {
        if (this.options == null) {
            this.options = new ArrayList<>();
        }
        options.forEach(option -> {
            this.options.add(option);
            option.setMenu(this);
        });
    }

    public void addStore(Store store) {
        this.store = store;
    }

    public void updateMenu(MenuInfo menuInfo) {
        this.name = menuInfo.getName();
        this.price = menuInfo.getPrice();
        this.menuUrl = menuInfo.getMenuUrl();
        this.options.clear();
        if (menuInfo.getOptionInfoList() != null) {
            List<Options> options = menuInfo.getOptionInfoList().stream()
                    .map(OptionInfo::toEntity).toList();
            addOptions(options);
        }
    }
}
