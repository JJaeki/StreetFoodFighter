package com.sff.storeserver.domain.review.service;

import com.sff.storeserver.common.error.type.BaseException;
import com.sff.storeserver.common.exception.ResourceNotFoundException;
import com.sff.storeserver.domain.review.dto.MyReviewInfo;
import com.sff.storeserver.domain.review.dto.ReviewRequest;
import com.sff.storeserver.domain.review.repository.ReviewRepository;
import com.sff.storeserver.domain.store.entity.Store;
import com.sff.storeserver.domain.store.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final StoreRepository storeRepository;

    @Transactional
    public void createReview(ReviewRequest reviewRequest) {
        Store store = storeRepository.findById(reviewRequest.getStoreId())
                .orElseThrow(BaseException::new);

        reviewRepository.save(reviewRequest.toEntity(store));
    }

    public void getMyReviews(Long userId) {

        // TODO - 페이지네이션 적용( 무한 스크롤 ) 대비 하기
        List<MyReviewInfo> myReviewInfoList = reviewRepository.findByUserId(userId);
        // 주문 아이디 리스트 -> 주문 서비스에 보내서 주문 메뉴 받아오기

        // 합쳐서 내려주기

    }

    public void getStoreReviews() {
//        reviewRepository.save(storeInfo.toEntity());
    }
}
