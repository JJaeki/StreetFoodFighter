package com.sff.OrderServer.order.entity;

import com.sff.OrderServer.bucket.entity.Bucket;
import com.sff.OrderServer.order.dto.OrderCreateRequest;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class OrderRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(nullable = false)
    private String receiptNumber;

    @Column(nullable = false) // not null 설정
    @Enumerated(EnumType.STRING)
    private OrderState state;

    private String requirement;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BUCKET_ID")
    private Bucket bucket;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long storeId;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public OrderRecord(OrderCreateRequest orderCreateRequest, Integer orderCount, Bucket bucket,
            Long userId) {
        String receiptNumber = orderCreateRequest.getStoreId() + "_" + LocalDateTime.now().format(
                DateTimeFormatter.ofPattern("yyyyMMdd")) + "-" + (orderCount + 1);
        this.receiptNumber = receiptNumber;
        this.state = OrderState.WAITING;
        this.requirement = orderCreateRequest.getRequirement();
        this.bucket = bucket;
        this.userId = userId;
        this.storeId = orderCreateRequest.getStoreId();
        this.createdAt = LocalDateTime.now();
    }

}
